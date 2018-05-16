<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/', function () {
//     return view('welcome');
// });

/**
     * Sakai.
     * 
     * Fecha: 23/04/2018
     */
Route::get('/', function() {
   	//al acceder al sistema con el url en / se redirecciona a la primera pagina Home donde se contiene la forma visual
	return Redirect::to('/home');
});

Route::resource('home', 'HomeController');

  /**
     * Sakai
     * 
     */
