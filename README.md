This is currently a Work in Progress project that I'm working on. It will be an application framework built on the same principles as any other publishing platform, but more geared towards developers, users, and publishing in general.

I don't currently have a name for this project, but I assume it will come over time.

Planned Features
====

- User Management
- Plugin System for extending functionality
- Theming System
- Visual page editor/builder
- Visual style editor to modify CSS
- REST API
- Edit content in Markdown, HTML, or with Visual Editor.
- Live Preview pages
- more in the [roadmap](https://trello.com/b/9cIara3V/drunken-ninja-roadmap)

Development
====

For now, have ember-cli installed and run ember serve from within the admin directory.

You will need to have the following running:
- MongoDB Server
- nodemon index.js --watch core content to watch core/ and content/ and not admin/.
- Admin ember server: ember server

Eventually there will be a build in server to serve the admin app directly.

Contributing
====

If you are interested in contributing, feel free to submit a pull request.
