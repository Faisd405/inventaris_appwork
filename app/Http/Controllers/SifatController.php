<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\sifat;
use App\Http\Requests\SifatRequest;

class SifatController extends Controller
{
    public function __construct(sifat $sifat)
    {
        $this->sifat = $sifat;
    }

    public function respons($sifat){
        return response()->json([
            'sifat' => $sifat,
        ]);
    }

    //index json
    public function index()
    {
        $sifat = $this->sifat->getSifat();
        return $this->respons($sifat);
    }

    //store json
    public function store(SifatRequest $request)
    {
        $sifat = $this->sifat->postSifat($request);
        return $this->respons($sifat);
    }

    //show json
    public function show($id)
    {
        $sifat = $this->sifat->getSifatById($id);
        return $this->respons($sifat);
    }

    //update json
    public function update(SifatRequest $request, $id)
    {
        $sifat = $this->sifat->updateSifat($request, $id);
        return $this->respons($sifat);
    }

    //destroy json
    public function destroy($id)
    {
        $sifat = $this->sifat->deleteSifat($id);
        return $this->respons($sifat);
    }

}
