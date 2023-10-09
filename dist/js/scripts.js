var base64Image = "";
// var products = [];

function selectImage() {
  return new Promise(function(resolve, reject) {
    var imageFile = document.getElementById('image-input').files[0];
    if (imageFile == null) {
      reject();
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function() {
      var base64String = reader.result;
      base64Image = base64String;
      resolve();
    };
  });
}

function testclick() {
  console.log(123);
  
  selectImage().then(function() {
    console.log(base64Image);})

    selectImage().then((callback) => {
        products.push({
          title: el("#Item-Name").value,
          description: el("#Item-description").value,
          price: Number(el("#Item-Price").value),
          image: base64Image,
        });
  });
}