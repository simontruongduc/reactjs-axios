<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return response()->json(['data'=>$products]);
    }

    public function store(Request $request)
    {
        $product = Product::create($request->all());
        return response()->json(['data'=>$product]);
    }

    public function show(Product $product)
    {
        return response()->json(['data'=>$product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return response()->json(['data'=>$product]);
    }


    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json();
    }
}
