# Angular CLI Commands Reference

## Project Generation (Already Done)
The project structure has been manually created with the following equivalents:

```bash
# Create Auth module with components (manually created)
# Equivalent commands:
ng generate module auth --routing
ng generate component auth/login
ng generate component auth/register

# Create Dashboard module (manually created)
# Equivalent commands:
ng generate module features/dashboard --routing
ng generate component features/dashboard/dashboard

# Create Feature modules (manually created)
# Equivalent commands:
ng generate module features/live-weather --routing
ng generate component features/live-weather/live-weather

ng generate module features/jokes-funny --routing
ng generate component features/jokes-funny/jokes-funny

ng generate module features/notepad-note --routing
ng generate component features/notepad-note/notepad-note

ng generate module features/fun-game --routing
ng generate component features/fun-game/fun-game
```

## Development Server

```bash
# Start development server
npm start

# Start with specific port
ng serve --port 4201

# Start with open browser
ng serve --open
```

## Build Commands

```bash
# Development build
ng build

# Production build
ng build --configuration production

# Production build with stats
ng build --configuration production --stats-json
```

## Testing

```bash
# Run unit tests
npm test

# Run tests with code coverage
ng test --code-coverage

# Run tests once (CI mode)
ng test --watch=false
```

## Additional Useful Commands

```bash
# Lint the project
ng lint

# Format code with prettier
ng lint --fix

# Generate a new service
ng generate service services/auth

# Generate a new guard
ng generate guard guards/auth

# Generate a new interceptor
ng generate interceptor interceptors/auth

# Generate a new pipe
ng generate pipe pipes/custom

# Analyze bundle size
ng build --stats-json && webpack-bundle-analyzer dist/*/stats.json
```

## Module Creation Pattern Used

Each module follows this pattern:

```typescript
// *.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { *RoutingModule } from './*-routing.module';
import { *Component } from './*.component';

@NgModule({
  declarations: [*Component],
  imports: [CommonModule, *RoutingModule]
})
export class *Module { }

// *-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { *Component } from './*.component';

const routes: Routes = [
  { path: '', component: *Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class *RoutingModule { }
```

## Lazy Loading Pattern

In `app-routing.module.ts`:

```typescript
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // ... other routes
];
```

## NgModule Configuration

- **CommonModule**: Used in all feature modules for common directives
- **ReactiveFormsModule**: Used in auth module for reactive forms
- **AppRoutingModule**: Main routing module with lazy-loaded routes
- **Non-Standalone**: All modules use traditional NgModule approach

## Development Workflow

1. **Start the dev server**: `npm start`
2. **Make changes** to components/modules
3. **Save files** - Angular CLI recompiles automatically
4. **Check browser** - App hot-reloads with changes
5. **Run tests**: `ng test` for continuous testing
6. **Build production**: `ng build --configuration production`

## Environment-Specific Building

```bash
# Development environment
ng serve --configuration development

# Production environment
ng serve --configuration production

# Custom environment
ng serve --configuration staging
```

## Dependencies Used

Core Dependencies (from existing package.json):
- **@angular/core**: Angular framework
- **@angular/common**: Common Angular directives
- **@angular/platform-browser**: Browser platform
- **@angular/forms**: Form handling (ReactiveFormsModule)
- **@angular/router**: Routing and lazy loading
- **rxjs**: Reactive extensions
- **tslib**: TypeScript helpers
- **zone.js**: Angular zone management

DevDependencies:
- **@angular/cli**: Command-line interface
- **@angular-devkit/build-angular**: Build optimizer
- **typescript**: TypeScript compiler
- **karma/jasmine**: Testing framework
- **sass**: SCSS compiler

## Tips for Further Development

1. Use `ng generate module <name> --routing` for new modules
2. Use `ng generate component <path>` for new components
3. Always use lazy loading for feature modules
4. Keep routing configurations at module level
5. Use dependency injection for services
6. Implement route guards for protected routes
7. Consider using NgRx for complex state management
8. Use interceptors for global HTTP handling

## Troubleshooting Commands

```bash
# Clear Angular cache
ng cache clean

# Clean dist folder
rm -rf dist/

# Reinstall node modules
rm -rf node_modules package-lock.json && npm install

# Check Angular version
ng version

# Update Angular CLI
npm install -g @angular/cli@latest
```
