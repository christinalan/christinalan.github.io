function preLoader() {

  //counter
  var i = 0;

  //create object
  imageObj = new Image();

  //set image list
  images = new Array();
  images[0]="/img/Slantd_Issue02_LooseSkins_ChristinaLan_1_s.png"
  images[1]="/img/Slantd_Issue02_LooseSkins_ChristinaLan2_s.png"
  images[2]="/img/Slantd_Issue02_LooseSkins_ChristinaLan3_s.png"
  images[3]="/img/Slantd_Issue02_LooseSkins_ChristinaLan4_s.png"
  images[4]="/img/Slantd_Issue02_LooseSkins_ChristinaLan5_s.png"
  images[5]="/img/Slantd_Issue02_LooseSkins_ChristinaLan6_s.png"
  images[6]="/img/10s.png"
  images[7]="/img/lala_s.gif"
  images[8]="/img/cutafter_forever_s.gif"
  images[9]="/img/justhands_s.jpg"
  images[10]="/img/mirrormirrorwhat_s.jpg"
  images[11]="/img/meltblackf_s.png"
  images[12]="/img/mirrormirroroppo_s.png"
  images[13]="/img/new2_s.png"
  images[14]="/img/winter1_small.jpg"
  images[15]="/img/39_s.png"
  images[16]="/img/22_s.png"
  images[17]="/img/34_s.png"
  images[18]="/img/meltblackf_s.png"
  images[19]="/img/mm2_s.png"
  images[20]="/img/weird_s.gif"

  //start preloading
  for(i=0; i<=22; i++)
  {
    imageObj.src=images[i];
  }

}
