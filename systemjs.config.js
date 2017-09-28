/**
 * Created by vlad on 28.09.17.
 */
SystemJS.config({
  map: {
    'app': './dist',
  },
  packages: {
    'app': {
      main: './main.js'
    }
  }
});