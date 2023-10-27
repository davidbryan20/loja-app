import { NextResponse } from "next/server";

const produtos = [
    {"id": 1,
    "nome": 'Mamão',
    "tipo": 'Fruta laranja',
    "desc": 'Rica em vitamina E'},
    {"id": 2,
    "nome": 'Melão',
    "tipo": 'Fruta verde',
    "desc": 'Rico em vitamina A'},
    {"id": 3,
    "nome": 'Manga',
    "tipo": 'Fruta Amarela',
    "desc": 'Rica em vitamina C'}
];

export async function GET(){
      return NextResponse.json(produtos);
  
}

