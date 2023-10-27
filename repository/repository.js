import {db} from '../db/database.js';

export async function getBs(params){
  return db.execute('select * from view_b_bs where bs_id=?',[params]).then(result=>result[0])
}
