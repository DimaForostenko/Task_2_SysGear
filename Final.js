const path = require('path');
const fs = require('fs');
const {exclude} = require('./excludes.js');
const {include} =require( './includes.js');
const  {sort_by} =require( './sort_by.js');

const readFiles = fs.readFileSync('value.json','utf-8');
const value = JSON.parse(readFiles);

const Filter=(val)=>{
    if(!val.condition){
    throw new TypeError('will be enter rules for sort')};
    const Rul=val.condition;
    let ex;
    let inc;
    let sor;
    let result;
    for( let data in Rul){
      if(data==="exclude"){
         ex = exclude(Rul,val)
      }
        if(data==="include"){
           inc = include(Rul,val)
        }
          if(data==="sort_by"){
            sor = sort_by(ex,inc)
          }
         result=sor;
        }
        const results={result};
        return JSON.stringify(results,null,'\t');
        };
console.log(Filter(value))
// const Result = Filter(value);
// const Final = JSON.stringify(Result,null,'\t');
// console.log(Final);