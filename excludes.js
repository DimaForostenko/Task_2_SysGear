function exclude(rul,value){

  let InData=rul.exclude[0];
  let ParSeach2=Object.values(InData)[0];

  let ResExclude = value.data.filter((obj) => {
    return !Object.keys(obj).some((key) => {
      return obj[key] === ParSeach2;
    })
  });
  return ResExclude
  }
  exports.exclude=exclude;