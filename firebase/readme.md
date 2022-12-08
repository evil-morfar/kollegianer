# Firebase

This folder contains all Firebase related business logic (basically everything that runs in the cloud - primarily functions).

## Emulators

By default, the webapp uses firebase emulators when running locally (i.e. when run with `ng serve`).

To start the emulators, simply run `firebase emulators:start --import=./mocks` from this directory.

You may need to run `firebase init` for first time setup.

For easy of access, you can also run `npm run emulators` from the root folder to start the emulators.
