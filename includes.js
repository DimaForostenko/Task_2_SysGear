 function include(rul,value){
  let InData=rul.include[0];
  let ParSeach2=Object.values(InData)[0];
  let ResInclude = value.data.filter((obj) => {
    return Object.keys(obj).some((key) => {
      return obj[key] === ParSeach2;
    })
  });
  return ResInclude
  }
  exports.include=include;