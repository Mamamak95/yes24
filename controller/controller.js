import ejs from 'ejs';
import * as repository from '../repository/repository.js';

export async function getHome(req,res){
      ejs
      .renderFile("./template/list.ejs", {})
      .then((data) => res.end(data))
}

export async function getBs(req, res){
  const params='BS'
  const rows=await repository.getBs(params)
  res.json(rows)
}


export async function getDbs (req, res){
  const params='DBS'
  const rows=await repository.getBs(params)
  res.json(rows);
}

export async function getHpbs (req, res){
  const params='HPBS'
  const rows=await repository.getBs(params)
  res.json(rows);
}
export async function Mbs (req, res) {
  const params='MBS'
  const rows=await repository.getBs(params)
  res.json(rows);
}

export async function Rtbs (req, res){
  const params='Rtbs'
  const rows=await repository.getBs(params)
  res.json(rows);
}

export async function Ss (req, res){
  const params='Ss'
  const rows=await repository.getBs(params)
  res.json(rows);
}