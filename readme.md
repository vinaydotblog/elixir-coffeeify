# Laravel Elixir Coffeeify (Beta)

[![Join the chat at https://gitter.im/vinnizworld/elixir-coffeeify](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vinnizworld/elixir-coffeeify?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Join the chat at https://gitter.im/vinnizworld/elixir-coffeeify](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vinnizworld/elixir-coffeeify?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An extension for laravel elixir to use browserify with coffee files

## Usage

### `gulp`
Add the following to your `gulpfile.js`

```js
var elixir = require( 'laravel-elixir' );

require( 'elixir-coffeeify' );

elixir( function( mix )
{
    mix.coffeeify( ['app.coffee', 'app2.coffee'] );
});
```

and run the command `gulp`

This will look for the `app.coffee` and `app2.coffee` files in the `resources/assets/js/` and it will run these files through browserify and generate `app.js` and `app2.js` inside `public/js`.

### `gulp watch`
You can also use `gulp watch` command which will constantly watch for `.coffee` files in resources and re-execute coffeeify task.



## License
[MIT](http://github.com/vinnizworld/elixir-coffeeify/blob/master/LICENSE)