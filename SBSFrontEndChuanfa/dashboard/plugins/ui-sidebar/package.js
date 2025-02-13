
Package.describe({
  name    : 'semantic:ui-sidebar',
  summary : 'Semantic UI - Sidebar: Single component release',
  version : '2.1.4',
  git     : 'git://github.com/Semantic-Org/UI-Sidebar.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'sidebar.css',
    'sidebar.js'
  ], 'client');
});
