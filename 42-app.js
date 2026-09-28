(function () {
  var WA = function (t) { return 'https://wa.me/919022150546?text=' + t; };
  var SZ = '6 to 10 (confirm on WhatsApp)';
  var OFFER = '🪔 Diwali Offer - Coming Soon!';  // offer banner text - khali rakha toh banner nahi dikhega
  var items = [
    { n: 1, brand: 'Addoxy', name: 'Addoxy Sneaker', colour: 'White / Black', offer: '₹450', mrp: '₹899', sizes: SZ, c: '100-w01.jpg', f: ['123-t01.jpg', '142-m01.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Addoxy+Sneaker+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%281%29') },
    { n: 2, brand: 'Xlerate', name: 'Xlerate Sports Shoes', colour: 'Blue / Green', offer: '₹450', mrp: '₹1299', sizes: SZ, c: '101-w02.jpg', f: ['124-t02.jpg', '143-m02.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Xlerate+Sports+Shoes+%28Blue%2FGreen%29+-+Rs+450+%28MRP+Rs+1299%29.+Please+share+available+sizes.+%282%29') },
    { n: 3, brand: 'TRV Sports', name: 'TRV Sports Shoes', colour: 'Black / Gold', offer: '₹650', mrp: '₹1299', sizes: SZ, c: '102-w03.jpg', f: ['125-t03.jpg', '144-m03.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+TRV+Sports+Shoes+%28Black%2FGold%29+-+Rs+650+%28MRP+Rs+1299%29.+Please+share+available+sizes.+%283%29') },
    { n: 4, brand: 'Sparx', name: 'Sparx Sport Shoe', colour: 'White / Teal / Orange', offer: '₹850', mrp: '₹1499', sizes: SZ, c: '103-w04.jpg', f: ['126-t04.jpg', '145-m04.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Sparx+Sport+Shoe+%28White%2FTeal%2FOrange%29+-+Rs+850+%28MRP+Rs+1499%29.+Please+share+available+sizes.+%284%29') },
    { n: 5, brand: 'RBH', name: "RBH Men's Sliders", colour: 'Grey', offer: '₹250', mrp: '₹499', sizes: SZ, tag: "Men's", c: '104-w05.jpg', f: ['127-t05.jpg', '146-m05.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Men%27s+Sliders+%28Grey%29+-+Rs+250+%28MRP+Rs+499%29.+Please+share+available+sizes.+%285%29') },
    { n: 6, brand: 'Bata Power', name: 'Bata Power Sports Sandal', colour: 'Olive / Yellow', offer: '₹450', mrp: '₹799', sizes: SZ, c: '105-w06.jpg', f: ['128-t06.jpg', '147-m06.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Bata+Power+Sports+Sandal+%28Olive%2FYellow%29+-+Rs+450+%28MRP+Rs+799%29.+Please+share+available+sizes.+%286%29') },
    { n: 7, brand: 'Bata Power', name: 'Bata Power Sports Sandal', colour: 'Navy / Blue', offer: '₹450', mrp: '₹799', sizes: SZ, c: '106-w07.jpg', f: ['129-t07.jpg', '148-m07.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Bata+Power+Sports+Sandal+%28Navy%2FBlue%29+-+Rs+450+%28MRP+Rs+799%29.+Please+share+available+sizes.+%287%29') },
    { n: 8, brand: 'TRK', name: "TRK Men's Sliders", colour: 'Black', sizes: SZ, tag: "Men's", c: '107-w08.jpg', f: ['130-t08.jpg', '149-m08.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+TRK+Men%27s+Sliders+%28Black%29.+Please+share+price+and+available+sizes.+%288%29') },
    { n: 9, brand: 'Flite', name: 'Flite Slide', colour: 'Camo Blue', offer: '₹199', sizes: SZ, c: '108-w09.jpg', f: ['131-t09.jpg', '150-m09.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Flite+Slide+%28Camo+Blue%29+-+Rs+199.+Please+share+available+sizes.+%289%29') },
    { n: 10, brand: 'Puma', name: 'Puma Slides', colour: 'Red / Black', offer: '₹250', mrp: '₹460', sizes: SZ, c: '109-w10.jpg', f: ['132-t10.jpg', '151-m10.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Puma+Slides+%28Red%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2810%29') },
    { n: 11, brand: 'AIR', name: 'AIR Slide', colour: 'Navy / Blue', offer: '₹150', sizes: SZ, c: '110-w11.jpg', f: ['133-t11.jpg', '152-m11.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+AIR+Slide+%28Navy%2FBlue%29+-+Rs+150.+Please+share+available+sizes.+%2811%29') },
    { n: 12, brand: 'BOSS', name: 'BOSS Slide', colour: 'White / Navy', offer: '₹150', sizes: SZ, c: '111-w12.jpg', f: ['134-t12.jpg', '153-m12.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+BOSS+Slide+%28White%2FNavy%29+-+Rs+150.+Please+share+available+sizes.+%2812%29') },
    { n: 13, brand: 'Sport', name: 'Sport Slide', colour: 'Black / Red', offer: '₹150', sizes: SZ, c: '112-w13.jpg', f: ['135-t13.jpg', '154-m13.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+SPORT+Slide+%28Black%2FRed%29+-+Rs+150.+Please+share+available+sizes.+%2813%29') },
    { n: 14, brand: 'V Shape', name: 'V Shape Flip-flop (PU-SKT)', colour: 'Black / Green', offer: '₹120', sizes: SZ, c: '113-w14.jpg', f: ['136-t14.jpg', '155-m14.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+V+Shape+PU-SKT+Flip-flop+%28Black%2FGreen%29+-+Rs+120.+Please+share+available+sizes.+%2814%29') },
    { n: 15, brand: 'V Shape', name: 'V Shape Flip-flop', colour: 'Black / Red', offer: '₹120', sizes: SZ, c: '114-w15.jpg', f: ['137-t15.jpg', '156-m15.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+V+Shape+Flip-flop+%28Black%2FRed%29+-+Rs+120.+Please+share+available+sizes.+%2815%29') },
    { n: 16, brand: 'Combit', name: 'Combit Flip-flop', colour: 'Black', offer: '₹250', mrp: '₹460', sizes: SZ, c: '115-w16.jpg', f: ['138-t16.jpg', '157-m16.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Combit+Flip-flop+%28Black%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2816%29') },
    { n: 17, brand: 'Combit', name: 'Combit Flip-flop', colour: 'Red / Black', offer: '₹250', mrp: '₹460', sizes: SZ, c: '116-w17.jpg', f: ['139-t17.jpg', '158-m17.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Combit+Flip-flop+%28Red%29+-+Rs+250+%28MRP+Rs+460%29.+Please+share+available+sizes.+%2817%29') },
    { n: 18, brand: 'RBH', name: 'Crocs', colour: 'White / Grey / Black', offer: '₹150', mrp: '₹250', sizes: SZ, c: '117-w18.jpg', f: ['140-t18.jpg', '159-m18.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Crocs+%28White%2FGrey%2FBlack%29+-+Rs+150+%28MRP+Rs+250%29.+Size+6+se+10+mein+se+confirm+karenge.+%2818%29') },
    { n: 19, brand: 'RBH', name: 'Flip-flop', colour: 'White', offer: '₹100', sizes: '6/10', c: '118-w19.jpg', f: ['141-t19.jpg', '160-m19.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Flip-flop+%28White%29+-+Rs+100.+Size+6%2F10.+Stock+limited%21+%2819%29') },
    { n: 20, brand: 'Paragon', name: 'Paragon Thong Flip-flop', colour: 'Tan', offer: '₹250', mrp: '₹299', sizes: SZ, c: '1-119-w20.jpg', f: ['14-142-t20.jpg', '26-154-m20.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Thong+Flip-flop+%28Tan%29+-+Rs+250+%28MRP+Rs+299%29.+Please+share+available+sizes.+%2820%29') },
    { n: 21, brand: 'Paragon', name: 'Paragon Original Rubber Hawai', colour: 'Blue / White', offer: '₹120', sizes: SZ, c: '2-120-w21.jpg', f: ['15-143-t21.jpg', '28-155-m21.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Original+Rubber+Hawai+%28Blue%2FWhite%29+-+Rs+120.+Please+share+available+sizes.+%2821%29') },
    { n: 22, brand: 'Paragon', name: 'Paragon Kolhapuri Chappal', colour: 'Brown', offer: '₹250', sizes: SZ, c: '3-121-w22.jpg', f: ['16-144-t22.jpg', '29-156-m22.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Kolhapuri+Chappal+%28Brown%29+-+Rs+250.+Please+share+available+sizes.+%2822%29') },
    { n: 23, brand: 'Paragon', name: 'Paragon Sandal (Back Strap)', colour: 'Brown', offer: '₹300', mrp: '₹380', sizes: SZ, c: '4-122-w23.jpg', f: ['17-145-t23.jpg', '30-157-m23.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Sandal+Back+Strap+%28Brown%29+-+Rs+300+%28MRP+Rs+380%29.+Please+share+available+sizes.+%2823%29') },
    { n: 24, brand: 'RBH', name: 'Perforated Loafer (Slip-on)', colour: 'Black', offer: '₹150', sizes: SZ, tag2: 'Kisaan Favourite', c: '5-123-w24.jpg', f: ['18-146-t24.jpg', '31-158-m24.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Perforated+Loafer+%28Black%29+-+Rs+150.+Please+share+available+sizes.+%2824%29') },
    { n: 25, brand: 'Paragon', name: 'Paragon EVA Slip-on Shoe', colour: 'Black', offer: '₹220', mrp: '₹300', sizes: SZ, c: '6-124-w25.jpg', f: ['19-147-t25.jpg', '32-159-m25.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+EVA+Slip-on+Shoe+%28Black%29+-+Rs+220+%28MRP+Rs+300%29.+Please+share+available+sizes.+%2825%29') },
    { n: 26, brand: 'Cross', name: 'Cross Clog', colour: 'Black / Grey', offer: '₹199', mrp: '₹450', sizes: SZ, c: '7-125-w26.jpg', f: ['20-148-t26.jpg', '33-160-m26.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Cross+Clog+%28Black%2FGrey%29+-+Rs+199+%28MRP+Rs+450%29.+Please+share+available+sizes.+%2826%29') },
    { n: 27, brand: 'Eeken', name: 'Eeken Slider (6162)', colour: 'Olive', offer: '₹450', mrp: '₹629', sizes: SZ, c: '8-126-w27.jpg', f: ['21-149-t27.jpg', '34-161-m27.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Eeken+Slider+6162+%28Olive%29+-+Rs+450+%28MRP+Rs+629%29.+Please+share+available+sizes.+%2827%29') },
    { n: 28, brand: 'Eeken', name: 'Eeken Double-buckle Slider', colour: 'Navy', offer: '₹550', sizes: SZ, c: '9-127-w28.jpg', f: ['22-150-t28.jpg', '35-162-m28.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Eeken+Double-buckle+Slider+%28Navy%29+-+Rs+550.+Please+share+available+sizes.+%2828%29') },
    { n: 29, brand: 'Eeken', name: 'Eeken Double-buckle Slider', colour: 'Black', offer: '₹550', sizes: SZ, c: '10-128-w29.jpg', f: ['23-151-t29.jpg', '36-163-m29.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Eeken+Double-buckle+Slider+%28Black%29+-+Rs+550.+Please+share+available+sizes.+%2829%29') },
    { n: 30, brand: 'RBH', name: 'Military Camo Gum Boot', colour: 'Camo', offer: '₹450', mrp: '₹899', sizes: SZ, c: '11-129-w30.jpg', f: ['24-152-t30.jpg', '37-164-m30.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Military+Camo+Gum+Boot+-+Rs+450+%28MRP+Rs+899%29.+Please+share+available+sizes.+%2830%29') },
    { n: 31, brand: 'Aarpar', name: 'Aarpar Formal Slip-on', colour: 'Black', offer: '₹250', mrp: '₹350', sizes: SZ, c: '12-130-w31.jpg', f: ['25-153-t31.jpg', '45-165-m31.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Aarpar+Formal+Slip-on+%28Black%29+-+Rs+250+%28MRP+Rs+350%29.+Please+share+available+sizes.+%2831%29') },
    { n: 32, brand: 'Paragon', name: "Paragon Blot 3330 Men's Sport Sandal", colour: 'Red/Black & Navy/Yellow', offer: '₹299', mrp: '₹380', sizes: SZ, tag: "Men's", cols: ['Red/Black', 'Navy/Yellow'], c: '13-131-w32.jpg', f: ['27-154-t32.jpg', '42-173-m32.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Blot+3330+Men%27s+Sport+Sandal+-+Rs+299+%28MRP+Rs+380%29.+Colour+Red%2FBlack+ya+Navy%2FYellow.+Please+share+available+sizes.+%2832%29') },
    { n: 33, brand: 'RBH', name: 'Girls School Belly', colour: 'Black', sizes: '5-10, 11-13, 1-8', szarr: ['5-10', '11-13', '1-8'], c: '46-132-w33.jpg', f: ['49-155-t33.jpg', '52-167-m33.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Girls+School+Belly+%28Black%29.+Please+share+price+and+available+sizes.+%2833%29') },
    { n: 34, brand: 'Gola', name: 'Gola School Shoes', colour: 'Black', sizes: '5-10, 11-13, 1-10', szarr: ['5-10', '11-13', '1-10'], c: '47-133-w34.jpg', f: ['50-156-t34.jpg', '53-168-m34.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Gola+School+Shoes+%28Black%29.+Please+share+price+and+available+sizes.+%2834%29') },
    { n: 35, brand: 'Cross', name: 'Ladies Cross Clog (Charms)', colour: 'Pink', offer: '₹199', sizes: '5 se 8', szarr: ['5', '6', '7', '8'], tag: 'Ladies', c: '48-134-w35.jpg', f: ['51-157-t35.jpg', '54-169-m35.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Ladies+Cross+Clog+%28Pink%29+-+Rs+199.+Size+5+se+8.+Please+share+available+sizes.+%2835%29') },
    { n: 36, brand: 'RBH', name: 'Horsebit Formal Loafer', colour: 'Brown', offer: '₹350', mrp: '₹500', sizes: SZ, c: '56-135-w36.jpg', f: ['58-158-t36.jpg', '60-170-m36.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Horsebit+Formal+Loafer+%28Brown%29+-+Rs+350+%28MRP+Rs+500%29.+Please+share+available+sizes.+%2836%29') },
    { n: 37, brand: 'RBH', name: 'Chelsea Boot', colour: 'Black', offer: '₹450', mrp: '₹600', sizes: SZ, c: '57-136-w37.jpg', f: ['59-159-t37.jpg', '61-171-m37.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Chelsea+Boot+%28Black%29+-+Rs+450+%28MRP+Rs+600%29.+Please+share+available+sizes.+%2837%29') },
    { n: 38, brand: 'Paragon', name: 'Paragon Slickers Sandal', colour: 'Olive', offer: '₹300', mrp: '₹349', sizes: SZ, c: '62-137-w38.jpg', f: ['69-160-t38.jpg', '76-172-m38.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Slickers+Sandal+%28Olive%29+-+Rs+300+%28MRP+Rs+349%29.+Please+share+available+sizes.+%2838%29') },
    { n: 39, brand: 'Paragon', name: 'Paragon Office Chappal', colour: 'Brown', offer: '₹199', mrp: '₹219', sizes: SZ, c: '63-138-w39.jpg', f: ['70-161-t39.jpg', '77-173-m39.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Office+Chappal+%28Brown%29+-+Rs+199+%28MRP+Rs+219%29.+Please+share+available+sizes.+%2839%29') },
    { n: 40, brand: 'Eeken', name: 'Eeken Cross-Strap Slider', colour: 'Black', offer: '₹450', mrp: '₹599', sizes: SZ, c: '64-139-w40.jpg', f: ['71-162-t40.jpg', '78-174-m40.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Eeken+Cross-Strap+Slider+%28Black%29+-+Rs+450+%28MRP+Rs+599%29.+Please+share+available+sizes.+%2840%29') },
    { n: 41, brand: 'Paragon', name: 'Paragon Vertex Chappal', colour: 'Black', offer: '₹250', mrp: '₹305', sizes: SZ, c: '65-140-w41.jpg', f: ['72-163-t41.jpg', '79-175-m41.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Vertex+Chappal+%28Black%29+-+Rs+250+%28MRP+Rs+305%29.+Please+share+available+sizes.+%2841%29') },
    { n: 42, brand: 'Paragon', name: 'Paragon Vertex Toe-Ring Chappal', colour: 'Brown', offer: '₹250', mrp: '₹319', sizes: SZ, c: '66-141-w42.jpg', f: ['73-164-t42.jpg', '80-176-m42.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Vertex+Toe-Ring+Chappal+%28Brown%29+-+Rs+250+%28MRP+Rs+319%29.+Please+share+available+sizes.+%2842%29') },
    { n: 43, brand: 'Eeken', name: 'Eeken Double-Buckle Slider', colour: 'Beige / Brown', offer: '₹450', mrp: '₹610', sizes: SZ, c: '67-142-w43.jpg', f: ['74-165-t43.jpg', '81-177-m43.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Eeken+Double-Buckle+Slider+%28Beige-Brown%29+-+Rs+450+%28MRP+Rs+610%29.+Please+share+available+sizes.+%2843%29') },
    { n: 44, brand: 'Paragon', name: 'Paragon Vertex Kolhapuri', colour: 'Brown', offer: '₹250', mrp: '₹309', sizes: SZ, c: '68-143-w44.jpg', f: ['75-166-t44.jpg', '82-178-m44.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Paragon+Vertex+Kolhapuri+%28Brown%29+-+Rs+250+%28MRP+Rs+309%29.+Please+share+available+sizes.+%2844%29') },
    { n: 45, brand: 'AarPar', name: 'AarPar Charli Loafer', colour: 'Black Checked', offer: '₹250', mrp: '₹360', sizes: SZ, c: '83-144-w45.jpg', f: ['85-167-t45.jpg', '87-179-m45.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+AarPar+Charli+Loafer+%28Black%29+-+Rs+250+%28MRP+Rs+360%29.+Please+share+available+sizes.+%2845%29') },
    { n: 46, brand: 'FS Queen', name: 'Dulhan Chappal (Stone Work)', colour: 'Red / Gold', offer: '₹259', mrp: '₹600', sizes: '5 se 8', szarr: ['5', '6', '7', '8'], tag: 'Ladies', c: '84-145-w46.jpg', f: ['86-168-t46.jpg', '88-180-m46.jpg'], wa: WA('Hi+Raja+Boot+House%21+I+saw+this+on+your+website+and+want+to+order%3A+Dulhan+Chappal+%28Red-Gold%29+-+Rs+259+%28MRP+Rs+600%29.+Please+share+available+sizes.+%2846%29') }
  ];

  function offPct(it) {
    if (!it.mrp || !it.offer) return 0;
    var m = parseInt(it.mrp.replace(/[^0-9]/g, ''), 10), o = parseInt(it.offer.replace(/[^0-9]/g, ''), 10);
    if (!m || !o || o >= m) return 0;
    return Math.round((m - o) / m * 100);
  }
  function card(it) {
    var el = document.createElement('article');
    el.className = 'card' + (it.oos ? ' oos' : '');
    el.innerHTML =
      '<div class="num">' + it.n + ' &nbsp;<span class="brand">' + it.brand + '</span>' + (it.tag ? ' &nbsp;<span class="gtag">' + it.tag + '</span>' : '') + (it.tag2 ? ' &nbsp;<span class="gtag2">' + it.tag2 + '</span>' : '') + '</div>' +
      '<h3>' + it.name + '</h3>' +
      '<div class="imgwrap">' + (offPct(it) ? '<span class="offpill-card">' + offPct(it) + '% off</span>' : '') + (!it.oos ? '<span class="stockpill">IN STOCK</span>' : '') + '<img src="' + it.c + '" alt="' + it.name + ', ' + it.colour + '" loading="lazy"></div>' +
      (it.mrp ? '<div class="mrp">MRP ' + it.mrp + '</div>' : '') +
      '<div class="offer">' + (it.offer ? 'Offer Price ' + it.offer : 'Price: ask on WhatsApp') + '</div>' +
      '<div class="facts"><div><b>Colour</b> ' + it.colour + '</div><div><b>Available Sizes</b> ' + it.sizes + '</div></div>' +
      (it.oos ? '<div class="oosnote">Out of stock - WhatsApp us for new stock</div>' : '<a class="btn" href="' + it.wa + '" target="_blank" rel="noopener">Order on WhatsApp</a>') +
      '<div class="rrow">' +
      '<a class="rlink" href="https://wa.me/?text=' + encodeURIComponent('Check this out - ' + it.name + ' (' + it.colour + ')' + (it.offer ? ' for just ' + it.offer : '') + ', Raja Boot House Dharni: https://burhanuddinraja008-alt.github.io/raja-boot-house/') + '" target="_blank" rel="noopener" aria-label="Share with a friend" title="Share with a friend"><svg width="17" height="17" viewBox="0 0 24 24" style="width:17px;height:17px;fill:#8a6d1f;vertical-align:-3px;"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg></a>' +
      '</div>';
    el.addEventListener('click', function (e) {
      if (e.target.closest('a') || e.target.closest('.wish-heart')) return;
      openPdp(it);
    });
    var iw = el.querySelector('.imgwrap');
    if (iw) {
      var wh = document.createElement('button');
      wh.type = 'button'; wh.className = 'wish-heart'; wh.setAttribute('data-n', it.n);
      wh.setAttribute('aria-label', 'Save to wishlist');
      wh.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 21c-5.5-3.6-9-7-9-10.6C3 7.1 5.4 5 8.1 5c1.6 0 3 .8 3.9 2.1C12.9 5.8 14.3 5 15.9 5 18.6 5 21 7.1 21 10.4c0 3.6-3.5 7-9 10.6z"/></svg>';
      wh.addEventListener('click', function (e) { e.stopPropagation(); toggleWish(it.n); });
      iw.appendChild(wh);
    }
    el._it = it;
    return el;
  }
  var ORD = 0;
  function fill(id, list) {
    var g = document.getElementById(id);
    list.forEach(function (it) { it.cat = id; var c = card(it); c._ord = ORD++; g.appendChild(it._el = c); });
  }
  var byN = {};
  items.forEach(function (i) { byN[i.n] = i; });
  function pick(ns) { return ns.map(function (n) { return byN[n]; }); }
  /* --- Trending (front page top): user-picked offer posters as card photos for products 6 & 7 --- */
  var TRENDIMG = { 6: '1-trending-power-olive.jpg', 7: '2-trending-power-navy.jpg' };
  fill('grid-trending', pick([6, 7]).map(function (it) { var t = Object.assign({}, it); if (TRENDIMG[t.n]) t.c = TRENDIMG[t.n]; return t; }));
  fill('grid-shoes', pick([1, 2, 3, 4]));
  fill('grid-sandals', pick([6, 7, 22, 23, 32, 38]));
  fill('grid-sliders', pick([5, 8, 9, 10, 11, 12, 13, 27, 28, 29, 40, 43]));
  fill('grid-flipflops', pick([14, 15, 16, 17, 18, 19, 20, 21, 26, 39, 41, 42, 44]));
  fill('grid-shoes2', pick([24, 25, 30, 31, 36, 37, 45]));
  fill('grid-school', pick([33, 34]));
  fill('grid-ladies', pick([35, 46]));

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lb'),
      stage = document.getElementById('lb-stage'),
      img = document.getElementById('lb-img'),
      title = document.getElementById('lb-title'),
      cap = document.getElementById('lb-cap'),
      waBtn = document.getElementById('lb-wa'),
      prev = document.getElementById('lb-prev'),
      next = document.getElementById('lb-next'),
      closeBtn = document.getElementById('lb-close');

  var cur = null, idx = 0;
  var scale = 1, tx = 0, ty = 0;

  function apply() {
    img.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
  }
  function clampPan() {
    var sw = stage.clientWidth, sh = stage.clientHeight;
    var iw = img.clientWidth * scale, ih = img.clientHeight * scale;
    var mx = Math.max(0, (iw - sw) / 2), my = Math.max(0, (ih - sh) / 2);
    tx = Math.min(mx, Math.max(-mx, tx));
    ty = Math.min(my, Math.max(-my, ty));
  }
  function resetZoom() { scale = 1; tx = 0; ty = 0; apply(); }

  function show() {
    img.src = cur.f[idx];
    img.alt = cur.name + ', photo ' + (idx + 1);
    title.textContent = cur.name;
    cap.textContent = cur.colour + ' · Photo ' + (idx + 1) + '/' + cur.f.length + ' · Pinch or double-tap to zoom';
    waBtn.href = cur.wa;
    var many = cur.f.length > 1;
    prev.style.display = many ? '' : 'none';
    next.style.display = many ? '' : 'none';
    resetZoom();
  }
  // offer banner
  if (OFFER) { var ob = document.getElementById('offer-banner'); if (ob) { ob.textContent = OFFER; ob.hidden = false; } }

  // search + filters (price, category, size) + sort
  var curF = 'all', curCat = 'all', curSize = 'all', curSort = 'feat';
  var GENDER_BY_GRID = { 'grid-shoes': 'men', 'grid-shoes2': 'men', 'grid-sandals': 'men', 'grid-sliders': 'men', 'grid-flipflops': 'men', 'grid-ladies': 'women', 'grid-school': 'kids' };
  function priceNum(it) { var m = (it.offer || '').replace(/[^0-9]/g, ''); return m ? parseInt(m, 10) : null; }
  function itemGender(it) { return GENDER_BY_GRID[it.cat] || 'men'; }
  function itemSizes(it) {
    if (it.szarr && it.szarr.length) return it.szarr.map(String);
    var m = (it.sizes || '').match(/\d+/g); return m || ['6', '7', '8', '9', '10'];
  }
  var SORT_GRIDS = ['grid-shoes', 'grid-sandals', 'grid-sliders', 'grid-flipflops', 'grid-shoes2', 'grid-school', 'grid-ladies'];
  var SORT_SECS = ['sec-sports', 'sec-sandals', 'sec-sliders', 'sec-flipflops', 'sec-shoes', 'sec-school', 'sec-ladies'];
  function applyFilter() {
    var q = (document.getElementById('q').value || '').toLowerCase().trim();
    var shown = {};
    items.forEach(function (it) {
      var el = it._el; if (!el) return;
      var p = priceNum(it);
      var okF = curF === 'all' || (curF === '200' ? (p !== null && p <= 200) : curF === '500' ? (p !== null && p <= 500) : (p !== null && p > 500));
      var okQ = !q || (it.name + ' ' + it.brand + ' ' + it.colour).toLowerCase().indexOf(q) !== -1;
      var okC = curCat === 'all' || itemGender(it) === curCat;
      var okS = curSize === 'all' || itemSizes(it).indexOf(curSize) !== -1;
      var show = okF && okQ && okC && okS;
      el.style.display = show ? '' : 'none';
      if (show && el.parentElement) shown[el.parentElement.id] = (shown[el.parentElement.id] || 0) + 1;
    });
    SORT_SECS.forEach(function (secId, i) {
      var sec = document.getElementById(secId);
      if (sec) sec.style.display = shown[SORT_GRIDS[i]] ? '' : 'none';
    });
  }
  function applySort() {
    SORT_GRIDS.forEach(function (gid) {
      var g = document.getElementById(gid); if (!g) return;
      var kids = Array.prototype.slice.call(g.children);
      kids.sort(function (a, b) {
        if (curSort === 'feat') return (a._ord || 0) - (b._ord || 0);
        var pa = a._it ? (priceNum(a._it) || 99999) : 99999;
        var pb = b._it ? (priceNum(b._it) || 99999) : 99999;
        return curSort === 'lo' ? pa - pb : pb - pa;
      });
      kids.forEach(function (k) { g.appendChild(k); });
    });
  }
  var qEl = document.getElementById('q');
  if (qEl) qEl.addEventListener('input', applyFilter);
  var frow = document.getElementById('frow');
  if (frow) frow.addEventListener('click', function (e) {
    var b = e.target.closest('.fchip'); if (!b) return;
    curF = b.getAttribute('data-f');
    frow.querySelectorAll('.fchip').forEach(function (c) { c.classList.toggle('on', c === b); });
    applyFilter();
  });
  var fCat = document.getElementById('f-cat'), fSize = document.getElementById('f-size'), fSort = document.getElementById('f-sort');
  if (fCat) fCat.addEventListener('change', function () { curCat = fCat.value; applyFilter(); });
  if (fSize) fSize.addEventListener('change', function () { curSize = fSize.value; applyFilter(); });
  if (fSort) fSort.addEventListener('change', function () { curSort = fSort.value; applySort(); });

  function openLb(it) {
    cur = it; idx = 0;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    show();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.style.overflow = '';
    cur = null;
  }
  function nav(d) {
    if (!cur || cur.f.length < 2) return;
    idx = (idx + d + cur.f.length) % cur.f.length;
    show();
  }
  closeBtn.addEventListener('click', closeLb);
  prev.addEventListener('click', function () { nav(-1); });
  next.addEventListener('click', function () { nav(1); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });

  /* Pointer gestures: pinch zoom, pan, swipe, double-tap */
  var pts = new Map(), pinchD0 = 0, scale0 = 1, mid0 = null, base = null;
  var downX = 0, downY = 0, movedFar = false, lastTap = 0;
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
  var pts = new Map(), pinchD0 = 0, scale0 = 1, mid0 = null, base = null;
  var downX = 0, downY = 0, movedFar = false, lastTap = 0;
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }

  stage.addEventListener('pointerdown', function (e) {
    if (e.target.closest('button')) return;
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      var p = Array.from(pts.values());
      pinchD0 = dist(p[0], p[1]);
      scale0 = scale;
      mid0 = mid(p[0], p[1]);
      base = { x: tx, y: ty };
    } else if (pts.size === 1) {
      downX = e.clientX; downY = e.clientY;
      base = { x: tx, y: ty };
      movedFar = false;
    }
  });
  stage.addEventListener('pointermove', function (e) {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY) > 10) movedFar = true;
    if (pts.size === 2 && pinchD0 > 0) {
      var p = Array.from(pts.values());
      var m = mid(p[0], p[1]);
      scale = Math.min(5, Math.max(1, scale0 * dist(p[0], p[1]) / pinchD0));
      tx = base.x + (m.x - mid0.x);
      ty = base.y + (m.y - mid0.y);
      clampPan(); apply();
    } else if (pts.size === 1 && scale > 1) {
      tx = base.x + (e.clientX - downX);
      ty = base.y + (e.clientY - downY);
      clampPan(); apply();
    }
  });
  function lift(e) {
    var wasPinch = pts.size >= 2;
    pts.delete(e.pointerId);
    if (wasPinch) { pinchD0 = 0; if (pts.size === 1) { var p = pts.values().next().value; downX = p.x; downY = p.y; base = { x: tx, y: ty }; } return; }
    if (pts.size > 0) return;
    var now = Date.now();
    if (!movedFar) {
      if (now - lastTap < 320) {
        if (scale > 1) { scale = 1; tx = 0; ty = 0; }
        else { scale = 2.5; clampPan(); }
        apply();
        lastTap = 0;
        return;
      }
      lastTap = now;
      return;
    }
    if (scale <= 1 && cur && cur.f.length > 1) {
      var dx = e.clientX - downX;
      if (dx > 50) nav(-1);
      else if (dx < -50) nav(1);
    }
  }
  stage.addEventListener('pointerup', lift);
  stage.addEventListener('pointercancel', function (e) { pts.delete(e.pointerId); pinchD0 = 0; });


  /* ---------- Product detail view (shoemato-style, RBH theme) ---------- */
  var pdp = document.getElementById('pdp'),
      pdpImg = document.getElementById('pdp-img'),
      pdpThumbs = document.getElementById('pdp-thumbs'),
      pdpName = document.getElementById('pdp-name'),
      pdpPrice = document.getElementById('pdp-price'),
      pdpMrp = document.getElementById('pdp-mrp'),
      pdpOff = document.getElementById('pdp-off'),
      pdpStock = document.getElementById('pdp-stock'),
      pdpColours = document.getElementById('pdp-colours'),
      pdpSizes = document.getElementById('pdp-sizes'),
      pdpRel = document.getElementById('pdp-rel'),
      pdpOrder = document.getElementById('pdp-order'),
      pdpOffers = document.getElementById('pdp-offers'),
      qVal = document.getElementById('q-val'),
      curIt = null, curCol = '', curSize = '', qty = 1;

  function sizeList(it) { return it.szarr || ['6', '7', '8', '9', '10']; }
  function colList(it) {
    if (it.cols) return it.cols;
    return [it.colour];
  }
  function orderLink() {
    if (!curIt) return '#';
    var t = 'Hi Raja Boot House! I saw this on your website and want to order: ' + curIt.name +
      ' (' + curCol + ')' + (curIt.offer ? ' - ' + curIt.offer.replace('\u20b9', 'Rs ') : '') +
      '. Size: ' + (curSize || 'to be confirmed') + '. Qty: ' + qty + '. (#' + curIt.n + ')';
    return WA(encodeURIComponent(t));
  }
  function refreshCta() { pdpOrder.href = orderLink(); }

  function chipRow(box, labels, onPick, active) {
    box.innerHTML = '';
    labels.forEach(function (lb, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (i === active ? ' on' : '');
      b.textContent = lb;
      b.addEventListener('click', function () { onPick(i, lb); });
      box.appendChild(b);
    });
  }

  function openPdp(it) {
    curIt = it; qty = 1; qVal.textContent = '1';
    curCol = colList(it)[0];
    curSize = '';
    pdpName.textContent = it.name + ' - ' + it.brand;
    pdpPrice.textContent = it.offer ? 'Offer Price ' + it.offer : 'Price: ask on WhatsApp';
    if (it.mrp) { pdpMrp.textContent = 'MRP ' + it.mrp; pdpMrp.hidden = false; } else { pdpMrp.hidden = true; }
    var off = offPct(it);
    if (off) { pdpOff.textContent = off + '% off'; pdpOff.hidden = false; } else { pdpOff.hidden = true; }
    pdpStock.hidden = !!it.oos;
    pdpImg.src = it.f[0];
    pdpImg.alt = it.name;
    pdpThumbs.innerHTML = '';
    it.f.forEach(function (src, i) {
      var th = document.createElement('img');
      th.src = src; th.alt = it.name + ' photo ' + (i + 1);
      th.className = i === 0 ? 'on' : '';
      th.addEventListener('click', function () {
        pdpImg.src = src;
        pdpThumbs.querySelectorAll('img').forEach(function (x) { x.classList.remove('on'); });
        th.classList.add('on');
      });
      pdpThumbs.appendChild(th);
    });
    chipRow(pdpColours, colList(it), function (i, lb) {
      curCol = lb;
      pdpColours.querySelectorAll('.chip').forEach(function (x, j) { x.classList.toggle('on', j === i); });
      if (it.cols && it.f[i]) {
        pdpImg.src = it.f[i];
        pdpThumbs.querySelectorAll('img').forEach(function (x, j) { x.classList.toggle('on', j === i); });
      }
      refreshCta();
    }, 0);
    chipRow(pdpSizes, sizeList(it), function (i, lb) {
      curSize = lb;
      pdpSizes.querySelectorAll('.chip').forEach(function (x, j) { x.classList.toggle('on', j === i); });
      refreshCta();
    }, -1);
    if (OFFER) { pdpOffers.hidden = false; } else { pdpOffers.hidden = true; }
    pdpRel.innerHTML = '';
    items.forEach(function (o) {
      if (o === it || o.cat !== it.cat) return;
      var r = document.createElement('button');
      r.type = 'button'; r.className = 'relcard';
      r.innerHTML = '<img src="' + o.c + '" alt="' + o.name + '"><span>' + o.name + '</span><b>' + (o.offer || '') + '</b>';
      r.addEventListener('click', function () { openPdp(o); pdp.querySelector('.pdp-body').scrollTop = 0; });
      pdpRel.appendChild(r);
    });
    refreshCta();
    pdp.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closePdp() { pdp.hidden = true; document.body.style.overflow = ''; }
  document.getElementById('pdp-close').addEventListener('click', closePdp);
  document.getElementById('q-minus').addEventListener('click', function () { qty = Math.max(1, qty - 1); qVal.textContent = qty; refreshCta(); });
  document.getElementById('q-plus').addEventListener('click', function () { qty = Math.min(10, qty + 1); qVal.textContent = qty; refreshCta(); });
  pdpImg.addEventListener('click', function () { if (curIt) openLb(curIt); });
  document.getElementById('pdp-share').addEventListener('click', function () {
    if (!curIt) return;
    var t = 'Check this out - ' + curIt.name + ' (' + curIt.colour + ')' + (curIt.offer ? ' for just ' + curIt.offer : '') + ', Raja Boot House Dharni: https://burhanuddinraja008-alt.github.io/raja-boot-house/';
    window.open('https://wa.me/?text=' + encodeURIComponent(t), '_blank');
  });

  /* ---------- Site reviews (Firebase Firestore) ---------- */
  var FBCFG = {
    apiKey: 'AIzaSyBWl9NX064CJAZa03ltvVoF97X7_1BkGzs',
    authDomain: 'raja-boot-house-dharni.firebaseapp.com',
    projectId: 'raja-boot-house-dharni',
    storageBucket: 'raja-boot-house-dharni.firebasestorage.app',
    messagingSenderId: '983191567554',
    appId: '1:983191567554:web:8feb614da884b5df29cf5b'
  };
  var WELCOME_URL = 'https://script.google.com/macros/s/AKfycbxRU5fvZotAVKIPZgWcg2wlwRhWO1tJQS_KEKqezf9K2K4MXnIGzSGNxKAVrHgKETc/exec';
  var WELCOME_TOKEN = 'bcd5d5fde8bc6dcb855f5a0faaad7035';
  var revOpen = document.getElementById('rev-open'),
      revForm = document.getElementById('revform'),
      revName = document.getElementById('rev-name'),
      revProd = document.getElementById('rev-product'),
      revText = document.getElementById('rev-text'),
      revHp = document.getElementById('rev-hp'),
      revMsg = document.getElementById('rev-msg'),
      revList = document.getElementById('revlist'),
      starBox = document.getElementById('rev-stars'),
      revSubmit = document.getElementById('rev-submit');
  var rating = 0, db = null;

  if (revProd) items.forEach(function (it) {
    var o = document.createElement('option');
    o.value = it.name + ' (' + it.colour + ', #' + it.n + ')';
    o.textContent = '#' + it.n + ' ' + it.name;
    revProd.appendChild(o);
  });

  function setRating(r) {
    rating = r;
    var bs = starBox.querySelectorAll('button');
    bs.forEach(function (b) { b.classList.toggle('on', +b.dataset.s <= r); });
  }
  if (starBox) starBox.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) setRating(+b.dataset.s);
  });

  function openRevForm(prodVal) {
    if (!revForm) return;
    revForm.hidden = false;
    if (prodVal) revProd.value = prodVal;
    revForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (revOpen) revOpen.addEventListener('click', function () { openRevForm(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-rev]');
    if (!a) return;
    e.preventDefault();
    var it = byN[+a.dataset.rev];
    openRevForm(it ? it.name + ' (' + it.colour + ', #' + it.n + ')' : '');
  });

  function starStr(r) { var s = ''; for (var i = 1; i <= 5; i++) s += i <= r ? '\u2605' : '\u2606'; return s; }

  function renderRevs(docs) {
    if (!revList) return;
    revList.innerHTML = '';
    if (!docs.length) {
      var p = document.createElement('p');
      p.className = 'revempty';
      p.textContent = 'Abhi site par koi review nahi - pehla review aap likhein!';
      revList.appendChild(p);
      return;
    }
    docs.forEach(function (d) {
      var v = d.data();
      var el = document.createElement('div');
      el.className = 'rev';
      var head = document.createElement('div'); head.className = 'rhead';
      var nm = document.createElement('span'); nm.className = 'rname'; nm.textContent = v.name;
      var st = document.createElement('span'); st.className = 'rstars'; st.textContent = starStr(v.rating);
      head.appendChild(nm); head.appendChild(st);
      el.appendChild(head);
      if (v.product) {
        var pr = document.createElement('div'); pr.className = 'rprod'; pr.textContent = v.product;
        el.appendChild(pr);
      }
      var tx = document.createElement('div'); tx.className = 'rtext'; tx.textContent = v.text;
      el.appendChild(tx);
      revList.appendChild(el);
    });
  }

  function loadRevs() {
    if (!db || !revList) return;
    db.collection('reviews').orderBy('createdAt', 'desc').limit(30).get()
      .then(function (snap) { renderRevs(snap.docs); })
      .catch(function () {});
  }

  try {
    if (window.firebase) {
      firebase.initializeApp(FBCFG);
      db = firebase.firestore();
      loadRevs();
      if (firebase.auth) {
        auth = firebase.auth();
        auth.onAuthStateChanged(function (u) { authReady = true; onUser(u); showLpop(); });
      } else { setTimeout(showLpop, 1200); }
      countVisit();
    }
  } catch (e) { db = null; }

  if (revSubmit) revSubmit.addEventListener('click', function () {
    if (revHp.value) { revMsg.textContent = 'Shukriya!'; return; }
    var name = revName.value.trim(), text = revText.value.trim(), prod = revProd.value;
    if (name.length < 2) { revMsg.textContent = 'Apna naam likhein.'; return; }
    if (!rating) { revMsg.textContent = 'Stars chunein (1 se 5).'; return; }
    if (text.length < 10) { revMsg.textContent = 'Review thoda lamba likhein (kam se kam 10 letters).'; return; }
    if (!db) { revMsg.textContent = 'Could not save the review right now - try again later.'; return; }
    var last = +(localStorage.getItem('rbh_rev_at') || 0);
    if (Date.now() - last < 120000) { revMsg.textContent = 'Thoda rukiye - ek review abhi bheja hai.'; return; }
    revSubmit.disabled = true;
    revMsg.textContent = 'Bhej rahe hain...';
    db.collection('reviews').add({
      name: name, text: text, rating: rating, product: prod,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
      localStorage.setItem('rbh_rev_at', Date.now());
      revMsg.textContent = 'Shukriya! Aapka review site par dikh raha hai.';
      revName.value = ''; revText.value = ''; revProd.value = ''; setRating(0);
      setTimeout(loadRevs, 1500);
    }).catch(function () {
      revMsg.textContent = 'Could not save the review - check your internet and try again.';
    }).finally(function () { revSubmit.disabled = false; });
  });

  /* ---------- A+B: bag, Google login, visitor counter, owner panel ---------- */
  var OWNER = 'burhanuddinraja008@gmail.com',
      SITE = 'https://burhanuddinraja008-alt.github.io/raja-boot-house/',
      auth, authReady = false, curUser = null;

  function esc(s) { return (s + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function todayKey() { var d = new Date(); function p(x) { return (x < 10 ? '0' : '') + x; } return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }

  /* --- Google login --- */
  var loginBtn = document.getElementById('login-btn'),
      lpop = document.getElementById('loginpop'),
      lpopMsg = document.getElementById('lpop-msg'),
      umenu = document.getElementById('usermenu');

  function showLpop() {
    if (!lpop) return;
    if (localStorage.getItem('rbhSkipLogin') === '1') return;
    if (auth && !authReady) return;
    if (curUser) return;
    if (location.hash === '#admin') return;
    lpop.hidden = false;
  }
  function hideLpop() { if (lpop) lpop.hidden = true; }
  function googleLogin() {
    if (!auth) { if (lpopMsg) lpopMsg.textContent = 'Login is not available right now - check your internet.'; return; }
    if (lpopMsg) lpopMsg.textContent = '';
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (e) {
      if (e && (e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request')) return;
      if (lpopMsg) lpopMsg.textContent = 'Login failed - please try again.';
    });
  }
  if (lpop) {
    document.getElementById('lpop-skip').addEventListener('click', function () {
      localStorage.setItem('rbhSkipLogin', '1');
      hideLpop();
    });
    document.getElementById('lpop-google').addEventListener('click', googleLogin);
  }
  if (loginBtn) loginBtn.addEventListener('click', function () {
    if (curUser) { if (umenu) umenu.hidden = !umenu.hidden; return; }
    if (lpop) lpop.hidden = false;
  });
  var umLogout = document.getElementById('umenu-logout'),
      umAdmin = document.getElementById('umenu-admin'),
      umEmail = document.getElementById('umenu-email');
  if (umLogout) umLogout.addEventListener('click', function () { if (auth) auth.signOut(); if (umenu) umenu.hidden = true; });
  if (umAdmin) umAdmin.addEventListener('click', function () {
    if (umenu) umenu.hidden = true;
    if (location.hash === '#admin') { openAdmin(); } else { location.hash = 'admin'; }
  });
  function onUser(u) {
    curUser = u;
    if (u) {
      hideLpop();
      if (loginBtn) loginBtn.textContent = (u.displayName || 'Account').split(' ')[0];
      if (umEmail) umEmail.textContent = u.email || '';
      if (umAdmin) umAdmin.hidden = (u.email !== OWNER);
      if (u.email === OWNER) { try { localStorage.setItem('rbhOwner', '1'); } catch (e) {} }
      if (db) {
        var ref = db.collection('customers').doc(u.uid);
        ref.get().then(function (s) {
          var d = { name: u.displayName || '', email: u.email || '', photo: u.photoURL || '', lastLoginAt: firebase.firestore.FieldValue.serverTimestamp() };
          if (!s.exists) d.firstLoginAt = firebase.firestore.FieldValue.serverTimestamp();
          return ref.set(d, { merge: true }).then(function () {
            if (!s.exists && u.email) sendWelcome(u.displayName || '', u.email);
          });
        }).catch(function () {});
      }
      var adm = document.getElementById('admin');
      if (adm && !adm.hidden) renderAdmin();
    } else if (loginBtn) { loginBtn.textContent = 'Login'; }
  }

  /* --- Welcome email (first login only) --- */
  function sendWelcome(name, email) {
    try {
      fetch(WELCOME_URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams({ token: WELCOME_TOKEN, name: name, email: email }) });
    } catch (e) {}
  }

  /* --- Visitor counter (Firestore daily) --- */
  function countVisit() {
    if (!db) return;
    var docRef = db.collection('visitors').doc(todayKey());
    var done = false;
    try { done = localStorage.getItem('rbhCounted') === todayKey() || localStorage.getItem('rbhOwner') === '1'; } catch (e) {}
    var p = done ? Promise.resolve() : docRef.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true }).then(function () {
      try { localStorage.setItem('rbhCounted', todayKey()); } catch (e) {}
    });
    p.then(function () { return docRef.get(); }).then(function (s) {
      if (s.exists) {
        var el = document.getElementById('visline');
        if (el) { el.textContent = s.data().count + ' people visited today.'; el.hidden = false; }
      }
    }).catch(function () {});
  }

  /* --- Shopping bag --- */
  var BAGKEY = 'rbhBag',
      bagEl = document.getElementById('bag'),
      bagItems = document.getElementById('bag-items'),
      bagTotal = document.getElementById('bag-total'),
      bagOrder = document.getElementById('bag-order'),
      bagCount = document.getElementById('bag-count');

  function getBag() { try { var b = JSON.parse(localStorage.getItem(BAGKEY)); return b && b.length ? b : []; } catch (e) { return []; } }
  function saveBag(b) { try { localStorage.setItem(BAGKEY, JSON.stringify(b)); } catch (e) {} refreshBadge(); }
  function priceNum(it) { if (!it.offer) return 0; var m = (it.offer + '').replace(/[^0-9]/g, ''); return m ? parseInt(m, 10) : 0; }
  function refreshBadge() {
    if (!bagCount) return;
    var n = 0; getBag().forEach(function (x) { n += x.qty; });
    bagCount.hidden = n === 0;
    bagCount.textContent = n;
  }
  function addToBag(it, col, size, q) {
    var b = getBag(), found = false;
    b.forEach(function (x) { if (x.n === it.n && x.col === col && x.size === size) { x.qty = Math.min(10, x.qty + q); found = true; } });
    if (!found) b.push({ n: it.n, col: col, size: size, qty: q });
    saveBag(b);
  }
  function bagMsg() {
    var b = getBag(), lines = ['Hello Raja Boot House! My order:'], total = 0, unsure = 0;
    b.forEach(function (x, i) {
      var it = byN[x.n]; if (!it) return;
      var p = priceNum(it) * x.qty; total += p; if (!priceNum(it)) unsure++;
      lines.push((i + 1) + ') ' + it.name + ' (' + x.col + ', #' + it.n + ') - Size ' + (x.size || 'to be confirmed') + ' x ' + x.qty + (p ? ' = Rs ' + p : ' (price on WhatsApp)'));
      lines.push('Photo: ' + SITE + it.c);
      lines.push('Link: ' + SITE + '#p' + it.n);
    });
    lines.push('Total: Rs ' + total + (unsure ? ' + some item prices to be confirmed' : ''));
    var a = lsGet(ADDRKEY, {}), prof = lsGet(PROFKEY, {});
    if (prof.name) lines.push('Name: ' + prof.name);
    var at = addrText();
    if (at) { lines.push('Delivery address: ' + at); if (a.phone) lines.push('Phone: ' + a.phone); }
    lines.push('Note: I understand the shoe price is separate and shipping charges are extra.');
    return lines.join('\n');
  }
  function renderBag() {
    if (!bagItems) return;
    var b = getBag();
    bagItems.innerHTML = '';
    if (!b.length) {
      bagItems.innerHTML = '<p class="bag-empty">Your bag is empty - add footwear you like.</p>';
      bagTotal.textContent = '';
      bagOrder.hidden = true;
      renderBagAddr();
      return;
    }
    bagOrder.hidden = false;
    var total = 0, unsure = 0;
    b.forEach(function (x, idx) {
      var it = byN[x.n]; if (!it) return;
      var p = priceNum(it), line = p * x.qty; total += line; if (!p) unsure++;
      var row = document.createElement('div'); row.className = 'bagrow';
      var img = document.createElement('img'); img.src = it.c; img.alt = it.name;
      var bi = document.createElement('div'); bi.className = 'bi';
      var t = document.createElement('b'); t.textContent = it.name;
      var s = document.createElement('span'); s.textContent = x.col + (x.size ? ' - Size ' + x.size : '') + ' (#' + it.n + ')';
      var pr = document.createElement('div'); pr.className = 'bprice';
      pr.textContent = p ? 'Rs ' + p + ' x ' + x.qty + ' = Rs ' + line : 'Price to be confirmed on WhatsApp';
      bi.appendChild(t); bi.appendChild(s); bi.appendChild(pr);
      var right = document.createElement('div'); right.className = 'bright';
      var qb = document.createElement('div'); qb.className = 'qty qty-sm';
      var mn = document.createElement('button'); mn.type = 'button'; mn.textContent = '−'; mn.setAttribute('aria-label', 'Less');
      var qv = document.createElement('span'); qv.textContent = x.qty;
      var pl = document.createElement('button'); pl.type = 'button'; pl.textContent = '+'; pl.setAttribute('aria-label', 'More');
      mn.addEventListener('click', function () { x.qty = Math.max(1, x.qty - 1); b[idx] = x; saveBag(b); renderBag(); });
      pl.addEventListener('click', function () { x.qty = Math.min(10, x.qty + 1); b[idx] = x; saveBag(b); renderBag(); });
      qb.appendChild(mn); qb.appendChild(qv); qb.appendChild(pl);
      var rm = document.createElement('button'); rm.type = 'button'; rm.className = 'bag-rm'; rm.textContent = 'Remove';
      rm.addEventListener('click', function () { b.splice(idx, 1); saveBag(b); renderBag(); });
      right.appendChild(qb); right.appendChild(rm);
      row.appendChild(img); row.appendChild(bi); row.appendChild(right);
      bagItems.appendChild(row);
    });
    bagTotal.innerHTML = '';
    var t1 = document.createElement('span'); t1.textContent = 'Total';
    var t2 = document.createElement('span'); t2.textContent = 'Rs ' + total + (unsure ? ' (+ some prices on WhatsApp)' : '');
    bagTotal.appendChild(t1); bagTotal.appendChild(t2);
    bagOrder.href = WA(encodeURIComponent(bagMsg()));
    renderBagAddr();
  }
  function openBag() { renderBag(); if (bagEl) { bagEl.hidden = false; document.body.style.overflow = 'hidden'; } }
  function closeBag() { if (bagEl) { bagEl.hidden = true; document.body.style.overflow = ''; } }
  var bagBtn = document.getElementById('bag-btn'),
      bagClose = document.getElementById('bag-close'),
      pdpAddbag = document.getElementById('pdp-addbag');
  if (bagBtn) bagBtn.addEventListener('click', function () {
    if (location.hash === '#bag') { openBag(); } else { location.hash = 'bag'; }
  });
  if (bagClose) bagClose.addEventListener('click', closeBag);
  if (pdpAddbag) pdpAddbag.addEventListener('click', function () {
    if (!curIt) return;
    addToBag(curIt, curCol, curSize, qty);
    var btn = this, old = btn.textContent;
    btn.textContent = 'Added to bag ✓';
    setTimeout(function () { btn.textContent = old; }, 1500);
  });
  refreshBadge();

  /* --- Owner admin panel --- */
  var adminEl = document.getElementById('admin'),
      adminBody = document.getElementById('admin-body'),
      adminClose = document.getElementById('admin-close');
  function fmtTs(ts) {
    try { var d = ts.toDate(); return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) + ', ' + d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }); } catch (e) { return ''; }
  }
  function renderAdmin() {
    if (!adminBody) return;
    adminBody.innerHTML = '';
    if (!curUser) {
      var p0 = document.createElement('p'); p0.className = 'bag-empty';
      p0.textContent = 'Sign in with Google first to see the owner panel.';
      adminBody.appendChild(p0);
      var lb = document.createElement('button'); lb.className = 'btn pdp-cta'; lb.type = 'button';
      lb.textContent = 'Sign in with Google';
      lb.addEventListener('click', googleLogin);
      adminBody.appendChild(lb);
      return;
    }
    if (curUser.email !== OWNER) {
      var p1 = document.createElement('p'); p1.className = 'bag-empty';
      p1.textContent = 'This page is only for the shop owner.';
      adminBody.appendChild(p1);
      return;
    }
    var s1 = document.createElement('div'); s1.className = 'adm-sec';
    s1.innerHTML = '<h3>Today\'s summary</h3><p class="adm-load">Loading...</p>';
    var s2 = document.createElement('div'); s2.className = 'adm-sec';
    s2.innerHTML = '<h3>Customers (Google login)</h3><p class="adm-load">Load ho raha hai...</p>';
    var s3 = document.createElement('div'); s3.className = 'adm-sec';
    s3.innerHTML = '<h3>Visitors - daily count</h3><p class="adm-load">Loading...</p>';
    adminBody.appendChild(s1); adminBody.appendChild(s2); adminBody.appendChild(s3);
    db.collection('customers').orderBy('lastLoginAt', 'desc').limit(100).get().then(function (snap) {
      var html = '';
      if (!snap.size) { html = '<p class="adm-load">No customer logins yet.</p>'; }
      else {
        html = '<table class="adm-table"><tr><th>Naam</th><th>Email</th><th>Last login</th></tr>';
        snap.forEach(function (d) { var v = d.data(); html += '<tr><td>' + esc(v.name) + '</td><td>' + esc(v.email) + '</td><td>' + fmtTs(v.lastLoginAt) + '</td></tr>'; });
        html += '</table>';
      }
      s2.innerHTML = '<h3>Customers (Google login) - ' + snap.size + '</h3>' + html;
      return db.collection('visitors').get();
    }).then(function (vs) {
      var docs = vs.docs.sort(function (a, b) { return a.id < b.id ? 1 : -1; }).slice(0, 14);
      var today = 0, rows = '';
      docs.forEach(function (d) { if (d.id === todayKey()) today = d.data().count; rows += '<tr><td>' + d.id + '</td><td>' + d.data().count + '</td></tr>'; });
      s1.innerHTML = '<h3>Today\'s summary</h3><p class="adm-big">Visitors today: <b>' + today + '</b></p>';
      s3.innerHTML = '<h3>Visitors - roz ka count</h3>' + (rows ? '<table class="adm-table"><tr><th>Date</th><th>Visitors</th></tr>' + rows + '</table>' : '<p class="adm-load">No data yet.</p>');
    }).catch(function () {
      [s1, s2, s3].forEach(function (s) { var l = s.querySelector('.adm-load'); if (l) l.textContent = 'Could not load data - check your internet.'; });
    });
  }
  function openAdmin() { renderAdmin(); if (adminEl) { adminEl.hidden = false; document.body.style.overflow = 'hidden'; } }
  function closeAdmin() { if (adminEl) { adminEl.hidden = true; document.body.style.overflow = ''; } }
  if (adminClose) adminClose.addEventListener('click', closeAdmin);

  /* --- Deep links: #p12, #bag, #admin --- */
  function handleHash() {
    var h = location.hash;
    if (h === '#bag') { openBag(); return; }
    if (h === '#admin') { openAdmin(); return; }
    var m = h.match(/^#p(\d+)$/);
    if (m && byN[+m[1]]) { openPdp(byN[+m[1]]); }
  }
  window.addEventListener('hashchange', handleHash);
  handleHash();


  /* ================= v19 PREVIEW FEATURES ================= */
  var FESTIVE_DEFAULT = true; // Diwali theme master switch: set to false after Diwali
  function lsGet(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function openOverlay(el) { if (el) { el.hidden = false; document.body.style.overflow = 'hidden'; } }
  function closeOverlay(el) { if (el) { el.hidden = true; document.body.style.overflow = ''; } }
  function fieldVal(id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; }

  /* --- Carousel (auto-rotate + swipe) --- */
  (function () {
    var track = document.getElementById('ctrack'), dots = document.getElementById('cdots');
    if (!track || !dots || !track.children.length) return;
    var n = track.children.length, ci = 0, timer = null;
    for (var i = 0; i < n; i++) { var d = document.createElement('i'); if (!i) d.className = 'on'; dots.appendChild(d); }
    function mark() {
      var now = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      Array.prototype.forEach.call(dots.children, function (el, j) { el.classList.toggle('on', j === now); });
      ci = now;
    }
    function go(i) { track.scrollTo({ left: ((i + n) % n) * track.clientWidth, behavior: 'smooth' }); }
    function auto() { clearInterval(timer); timer = setInterval(function () { if (!document.hidden) go(ci + 1); }, 4000); }
    track.addEventListener('scroll', function () { window.requestAnimationFrame(mark); }, { passive: true });
    track.addEventListener('pointerdown', function () { clearInterval(timer); });
    track.addEventListener('pointerup', auto);
    auto();
  })();

  /* --- Wishlist --- */
  var WISHKEY = 'rbhWish';
  var wishEl = document.getElementById('wish');
  function getWish() { return lsGet(WISHKEY, []); }
  function toggleWish(n) {
    var w = getWish(), i = w.indexOf(n);
    if (i === -1) w.push(n); else w.splice(i, 1);
    lsSet(WISHKEY, w); syncWishUI();
  }
  function syncWishUI() {
    var w = getWish();
    document.querySelectorAll('.wish-heart').forEach(function (h) {
      h.classList.toggle('on', w.indexOf(+h.getAttribute('data-n')) !== -1);
    });
    var b = document.getElementById('wish-badge');
    if (b) { b.hidden = w.length === 0; b.textContent = w.length; }
  }
  function renderWish() {
    var body = document.getElementById('wish-body'); if (!body) return;
    var w = getWish(); body.innerHTML = '';
    if (!w.length) { body.innerHTML = '<p class="bag-empty">Your wishlist is empty - tap the heart on any product to save it here.</p>'; return; }
    w.forEach(function (n) {
      var it = byN[n]; if (!it) return;
      var row = document.createElement('div'); row.className = 'wishrow';
      var im = document.createElement('img'); im.src = it.c; im.alt = it.name;
      var bi = document.createElement('div'); bi.className = 'bi';
      var t = document.createElement('b'); t.textContent = it.name;
      var sp = document.createElement('span'); sp.textContent = it.colour + (it.offer ? ' - ' + it.offer : '');
      bi.appendChild(t); bi.appendChild(sp);
      var rm = document.createElement('button'); rm.type = 'button'; rm.className = 'bag-rm'; rm.textContent = 'Remove';
      rm.addEventListener('click', function (e) { e.stopPropagation(); toggleWish(n); });
      row.appendChild(im); row.appendChild(bi); row.appendChild(rm);
      row.addEventListener('click', function () { closeOverlay(wishEl); openPdp(it); });
      body.appendChild(row);
    });
  }

  /* --- Profile, address, settings --- */
  var ADDRKEY = 'rbhAddr', PROFKEY = 'rbhProfile';
  var profileEl = document.getElementById('profile');
  function getAddr() { return lsGet(ADDRKEY, {}); }
  function addrText() { var a = getAddr(); return [a.line, a.city, a.pin].filter(Boolean).join(', '); }
  function renderAva() {
    var box = document.getElementById('prof-ava-img'); if (!box) return;
    var prof = lsGet(PROFKEY, {});
    var src = prof.photo || (curUser && curUser.photoURL) || '';
    if (src) { box.innerHTML = '<img src="' + src + '" alt="">'; }
    else { box.innerHTML = '<svg viewBox="0 0 24 24" width="30" height="30" style="fill:#b6a98c;"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>'; }
  }
  function openProfile() {
    var prof = lsGet(PROFKEY, {}), a = getAddr();
    document.getElementById('prof-name').value = prof.name || (curUser && curUser.displayName) || '';
    document.getElementById('addr-line').value = a.line || '';
    document.getElementById('addr-city').value = a.city || '';
    document.getElementById('addr-pin').value = a.pin || '';
    document.getElementById('addr-phone').value = a.phone || '';
    renderAva(); syncTogs();
    openOverlay(profileEl);
  }
  var profPhoto = document.getElementById('prof-photo');
  if (profPhoto) profPhoto.addEventListener('change', function () {
    var f = profPhoto.files && profPhoto.files[0]; if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      var im = new Image();
      im.onload = function () {
        var cv = document.createElement('canvas'), sc = Math.min(1, 200 / Math.max(im.width, im.height));
        cv.width = Math.round(im.width * sc); cv.height = Math.round(im.height * sc);
        cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
        var prof = lsGet(PROFKEY, {}); prof.photo = cv.toDataURL('image/jpeg', 0.8); lsSet(PROFKEY, prof); renderAva();
      };
      im.src = rd.result;
    };
    rd.readAsDataURL(f);
  });
  var addrSave = document.getElementById('addr-save');
  if (addrSave) addrSave.addEventListener('click', function () {
    lsSet(ADDRKEY, { line: fieldVal('addr-line'), city: fieldVal('addr-city'), pin: fieldVal('addr-pin'), phone: fieldVal('addr-phone') });
    var prof = lsGet(PROFKEY, {}); prof.name = fieldVal('prof-name'); lsSet(PROFKEY, prof);
    this.textContent = 'Saved ✓'; var b = this;
    setTimeout(function () { b.textContent = 'Save details'; }, 1500);
  });
  function renderBagAddr() {
    var el = document.getElementById('bag-addr'); if (!el) return;
    var a = getAddr(), at = addrText();
    if (at) {
      el.innerHTML = '<b>Deliver to</b>' + esc(at) + (a.phone ? '<br>Phone: ' + esc(a.phone) : '') + '<br><button class="addr-edit" type="button" id="addr-edit">Change address</button>';
    } else {
      el.innerHTML = '<b>Delivery address</b>Add your address so the shop knows where to deliver.<br><button class="addr-edit" type="button" id="addr-edit">Add address</button>';
    }
    var eb = document.getElementById('addr-edit');
    if (eb) eb.addEventListener('click', function () { closeOverlay(document.getElementById('bag')); openProfile(); });
  }

  /* --- Dark mode --- */
  function applyDark(on) { document.body.classList.toggle('dark', !!on); lsSet('rbhDark', !!on); }
  applyDark(lsGet('rbhDark', false));

  /* --- Diwali festive theme --- */
  function festiveOn() { return FESTIVE_DEFAULT && lsGet('rbhFestive', true); }
  function applyFestive() {
    var on = festiveOn();
    document.body.classList.toggle('festive', on);
    var fl = document.getElementById('festive-lights'); if (fl) fl.hidden = !on;
  }
  var sparkTimer = null;
  function sparkStart() {
    if (sparkTimer || !festiveOn()) return;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    sparkTimer = setInterval(function () {
      if (document.hidden || !festiveOn()) return;
      var host = document.querySelector('.hero'); if (!host) return;
      if (host.querySelectorAll('.spark').length > 5) return;
      var sp = document.createElement('i');
      sp.className = 'spark';
      var size = 24 + Math.random() * 30;
      sp.style.width = sp.style.height = size + 'px';
      sp.style.left = (Math.random() * 88) + '%';
      sp.style.top = (Math.random() * 80) + '%';
      host.appendChild(sp);
      setTimeout(function () { sp.remove(); }, 1500);
    }, 1400);
  }

  /* --- Settings toggles --- */
  function setTog(id, on) { var t = document.getElementById(id); if (t) t.setAttribute('aria-pressed', on ? 'true' : 'false'); }
  function syncTogs() {
    setTog('tog-dark', lsGet('rbhDark', false));
    setTog('tog-notif', lsGet('rbhNotifOn', true));
    setTog('tog-festive', festiveOn());
  }
  var togDark = document.getElementById('tog-dark'), togNotif = document.getElementById('tog-notif'), togFest = document.getElementById('tog-festive');
  if (togDark) togDark.addEventListener('click', function () { applyDark(!lsGet('rbhDark', false)); syncTogs(); });
  if (togNotif) togNotif.addEventListener('click', function () { lsSet('rbhNotifOn', !lsGet('rbhNotifOn', true)); syncTogs(); });
  if (togFest) togFest.addEventListener('click', function () { lsSet('rbhFestive', !festiveOn()); applyFestive(); syncTogs(); sparkStart(); });

  /* --- Notifications (bell + local list) --- */
  var NOTIFKEY = 'rbhNotifs', SEENKEY = 'rbhNotifsSeen';
  var notifEl = document.getElementById('notif');
  function getNotifs() { return lsGet(NOTIFKEY, []); }
  function pushNotif(text) {
    if (!lsGet('rbhNotifOn', true)) return;
    var n = getNotifs(); n.unshift({ t: text, ts: Date.now() }); lsSet(NOTIFKEY, n.slice(0, 20)); syncBell();
  }
  function syncBell() {
    var b = document.getElementById('bell-badge'); if (!b) return;
    var seen = lsGet(SEENKEY, 0);
    var un = getNotifs().filter(function (x) { return x.ts > seen; }).length;
    b.hidden = un === 0; b.textContent = un;
  }
  function renderNotifs() {
    var body = document.getElementById('notif-body'); if (!body) return;
    var n = getNotifs(); body.innerHTML = '';
    if (!n.length) { body.innerHTML = '<p class="bag-empty">No notifications yet - new offers will show up here.</p>'; return; }
    n.forEach(function (x) {
      var r = document.createElement('div'); r.className = 'notifrow';
      r.appendChild(document.createTextNode(x.t));
      var d = document.createElement('span');
      d.textContent = new Date(x.ts).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      r.appendChild(d); body.appendChild(r);
    });
  }

  /* Web push (preview) - OneSignal free tier wiring. To go live:
     1) Add <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script> to index.html
     2) window.OneSignal = window.OneSignal || [];
        OneSignal.push(function () {
          OneSignal.init({ appId: 'ONESIGNAL_APP_ID' });
          OneSignal.on('notificationDisplay', function (e) { pushNotif(e.content || 'New offer'); });
        });
     The Settings > Offer notifications toggle gates storage/display. */

  /* --- Topbar buttons --- */
  var wishBtn = document.getElementById('wish-btn'), bellBtn = document.getElementById('bell-btn'), profBtn = document.getElementById('profile-btn');
  if (wishBtn) wishBtn.addEventListener('click', function () { renderWish(); openOverlay(wishEl); });
  if (bellBtn) bellBtn.addEventListener('click', function () { renderNotifs(); openOverlay(notifEl); lsSet(SEENKEY, Date.now()); syncBell(); });
  if (profBtn) profBtn.addEventListener('click', openProfile);
  [['wish-close', wishEl], ['notif-close', notifEl], ['profile-close', profileEl]].forEach(function (pr) {
    var b = document.getElementById(pr[0]); if (b) b.addEventListener('click', function () { closeOverlay(pr[1]); });
  });
  var umProfile = document.getElementById('umenu-profile');
  if (umProfile) umProfile.addEventListener('click', function (e) {
    e.preventDefault(); if (umenu) umenu.hidden = true; openProfile();
  });

  /* --- Install app popup (after sign-in + browsing, once per session) --- */
  var ipop = document.getElementById('ipop'), ipopShown = false, browsed = false;
  function markBrowsed() { browsed = true; maybeIpop(); }
  function maybeIpop() {
    if (!ipop || ipopShown || !curUser || !browsed) return;
    try { if (sessionStorage.getItem('rbhIpopS') === '1') return; } catch (e) {}
    if (localStorage.getItem('rbhIpop') === '1') return;
    if (!window.deferredPrompt) return;
    ipop.hidden = false; ipopShown = true;
    try { sessionStorage.setItem('rbhIpopS', '1'); } catch (e) {}
  }
  var ipopInstall = document.getElementById('ipop-install'), ipopLater = document.getElementById('ipop-later');
  if (ipopInstall) ipopInstall.addEventListener('click', function () {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.finally(function () { window.deferredPrompt = null; });
    }
    ipop.hidden = true;
  });
  if (ipopLater) ipopLater.addEventListener('click', function () {
    try { localStorage.setItem('rbhIpop', '1'); } catch (e) {}
    ipop.hidden = true;
  });
  var scrollMarked = false;
  window.addEventListener('scroll', function () {
    if (!scrollMarked && window.scrollY > 500) { scrollMarked = true; markBrowsed(); }
  }, { passive: true });
  var _onUser = onUser;
  onUser = function (u) { _onUser(u); maybeIpop(); };
  var _openPdp = openPdp;
  openPdp = function (it) { markBrowsed(); _openPdp(it); };

  /* --- init --- */
  syncWishUI(); syncBell(); applyFestive(); syncTogs(); sparkStart();

})();
