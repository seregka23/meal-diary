import { deepEqual, equal, match, ok } from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it } from 'node:test';

const root = process.cwd();

function readJson(path) {
  return JSON.parse(readFileSync(join(root, path), 'utf8'));
}

function readText(path) {
  return readFileSync(join(root, path), 'utf8');
}

describe('npm workspace scaffold', () => {
  it('declares the backend and frontend workspace apps with a committed root lockfile', () => {
    const rootPackage = readJson('package.json');
    const lockfile = readJson('package-lock.json');

    deepEqual(rootPackage.workspaces, ['apps/api', 'apps/web']);
    ok(existsSync(join(root, 'package-lock.json')));
    deepEqual(lockfile.packages[''].workspaces, rootPackage.workspaces);
    ok(existsSync(join(root, 'apps/api/package.json')));
    ok(existsSync(join(root, 'apps/web/package.json')));
  });

  it('documents clean-checkout baseline commands and workspace start commands', () => {
    const readme = readText('README.md');
    const agents = readText('AGENTS.md');
    const rootPackage = readJson('package.json');
    const apiPackage = readJson('apps/api/package.json');
    const webPackage = readJson('apps/web/package.json');

    match(readme, /npm install/);
    match(readme, /npm run lint/);
    match(readme, /npm test/);
    match(readme, /npm run build/);
    match(readme, /npm run start:api/);
    match(readme, /npm run start:web/);
    match(readme, /Supabase local services/);
    match(agents, /npm run lint/);
    match(agents, /Supabase/);
    equal(rootPackage.scripts.lint, 'npm run lint --workspaces --if-present');
    equal(rootPackage.scripts.build, 'npm run build --workspaces --if-present');
    equal(rootPackage.scripts.test, 'npm run test:scaffold && npm run test --workspaces --if-present');
    equal(rootPackage.scripts['start:api'], 'npm --workspace @meal-diary/api run start:dev');
    equal(rootPackage.scripts['start:web'], 'npm --workspace @meal-diary/web run start');
    ok(apiPackage.scripts.lint);
    ok(apiPackage.scripts.test);
    ok(apiPackage.scripts.build);
    ok(webPackage.scripts.lint);
    ok(webPackage.scripts.build);
  });
});

describe('NestJS backend scaffold', () => {
  it('contains a minimal NestJS entry point, module, controller, and service', () => {
    const apiPackage = readJson('apps/api/package.json');

    ok(apiPackage.dependencies['@nestjs/common']);
    ok(apiPackage.dependencies['@nestjs/core']);
    ok(apiPackage.dependencies['@nestjs/platform-express']);
    match(readText('apps/api/src/main.ts'), /NestFactory\.create\(AppModule\)/);
    match(readText('apps/api/src/app.module.ts'), /@Module\(/);
    match(readText('apps/api/src/app.controller.ts'), /@Controller\(\)/);
    match(readText('apps/api/src/app.service.ts'), /getStartupPlaceholder/);
  });
});

describe('Angular frontend scaffold', () => {
  it('contains a minimal Angular application entry point and placeholder component', () => {
    const webPackage = readJson('apps/web/package.json');

    ok(webPackage.dependencies['@angular/core']);
    ok(webPackage.dependencies['@angular/platform-browser']);
    ok(webPackage.dependencies['@angular/router']);
    match(readText('apps/web/src/main.ts'), /bootstrapApplication\(AppComponent, appConfig\)/);
    match(readText('apps/web/src/app/app.component.ts'), /selector: 'app-root'/);
    match(readText('apps/web/src/app/app.component.html'), /Frontend scaffold/);
  });

  it('does not define Food Diary feature routes yet', () => {
    match(readText('apps/web/src/app/app.routes.ts'), /export const routes: Routes = \[\];/);
  });
});
