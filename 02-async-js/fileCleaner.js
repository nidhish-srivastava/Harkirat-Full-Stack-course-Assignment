// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input wash : hello     world    my    name   is       raman,After the program runs, the output should be : hello world my name is raman


function fileCleaner(filePath){
  const fs = require('fs')
  fs.readFile(filePath,"utf-8",(err,data)=>{
    if(data){
        const cleanData = data.replace(/\s+/g," ")
        fs.writeFile(filePath,cleanData,'utf-8',(err)=>{
            if(err) console.log(err);
            else console.log("File cleaned successfull");
        })
    }
  })
}

fileCleaner('file.txt')