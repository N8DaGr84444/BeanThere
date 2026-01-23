# BeanThere Brewed That

BeanThere is an app to help you on your coffee journey. You can track and rank coffee shops you visit, view rankings from friends, discover new coffee shops, and more. This project is still in the very early phases.

## Road Map

- Milestone 1: Personal coffee log. Add an entry with a simple form including name of coffee shop, location, what drink you got, ranking, and a picture. View past entries and see locations on a map.
- Milestone 2: Connect with friends. View checkings and rankings from other users.
- Milestone 3: Feed page. Events, specials (like holiday specials), new shops, etc.
- Milestone 4: Map discovery and searching for more than just user entries. Advanced queries including relevancy based on personal tastes.
- Milestone 5: AI assistant, because you can't not have AI.

## Framework

This app is built on Ionic Vue. Backend is TBD. Potentially AWS.

## How to run locally

Must have `node` and `npm` installed.
Clone this repo, then run `npm i` and `ionic serve` to launch in a local webpage.

### Android Deployment

With Android studio installed and setup, there are two options to build the project for Android.

1. `npm run android:full` will perform a full build and sync. This needs to be done the first time and any time a UI element has been changed.
2. `npm run android:fast` will perform a quick sync, which can be done whenever the js or logic changes but the UI remains the same.
   Both of these will compile the code and open it in Android studio, where it can be deployed to an emulator or a physical Android device.

If the assets have changed, they can be compiled with `npx capacitor-assets generate` before building.

Sometimes weird bugs occur in the Android code due to some stuff being out of sync or weirdly linked. To fix this, clear the Android build and restart:

1. `rm -rf dist`
2. `rm -rf android/app/src/main/assets`
3. `rm -rf android/app/build`
4. `rm -rf android/.gradle`

Then rerun the full build `npm run android:full`
