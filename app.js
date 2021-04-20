const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs)


const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
    profileDataArr.forEach(profileItem => console.log(profileItem));
    console.log('================');
  
    // Is the same as this...
    
  };
  printProfileData(profileDataArgs)



