import React from 'react'
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player'

function About() {
  return (
    <div>

<section className='container mx-auto  '>
<img src="./about1.jpg" className="container mx-auto h-1/3 md:h-screen  "      />

<section className='grid lg:grid-cols-3 grid-cols-1'>
<div className='col-span-2 p-10  ' >
  <div className='flex justify-start items-center'>
    <p className='text-black font-bold text-5xl'>Specialization/Activity areas</p>
  </div>
  <div>
    <p className='break-words space-y-3 text-lg mt-10'>
    It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. 
    Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. 
    Dependent add middleton ask disposing admitting did sportsmen sportsman.

Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar 
impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten you the weather ferrars venture friends. Solid visit seems again you nor all.


Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. 
An so to preferred convinced distrusts he determine. In musical me my placing clothes comfort pleased hearing. Any residence you satisfied and rapturous 
certainty two. Procured outweigh as outlived so so. On in bringing graceful proposal blessing of marriage outlived. Son rent face our loud near.

Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution headers dissimilar
 precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our.

Not him old music think his found enjoy merry. Listening acuteness dependent at or an. Apartments thoroughly unsatiable terminated sex how themselves. She are ten 
hours wrong walls stand early. Domestic perceive on an ladyship extended received do. Why jennings our whatever his learning gay perceive. Is against no he without 
subject. Bed connection unreserved preference partiality not unaffected. Years merit trees so think in hoped we as.

Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore
 sing saw calm high. Of an or game gate west face shed. Uno great but music too old found arose.

Abilities forfeited situation extremely my to he resembled. Old had conviction discretion understood put principles you. Match means keeps round one her quick. She forming
 two comfort invited. Yet she income effect edward. Entire desire way design few. Mrs sentiments led solicitude estimating friendship fat. Meant those event is weeks state it to or.
  Boy but has folly charm there its. Its fact ten spot drew.

Six started far placing saw respect females old. Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated
 principles day. Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh. Is time from them full my gone in went. Of no introduced am literature excellence mr stimulated contrasted increasing. Age sold some full like rich new. Amounted repeated as believed in confined juvenile.

Death weeks early had their and folly timed put. Hearted forbade on an village ye in fifteen. Age attended betrayed her man raptures laughter. Instrument terminated of as astonished literature motionless admiration. The affection are determine how performed intention discourse but. On merits on so valley indeed assure of. Has add particular boisterous uncommonly are. Early wrong as so manor match. Him necessary shameless discovery consulted one but.

Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall.

    </p>
  </div>

</div>

<div className='col-span-1 p-10   min-h-screen'>
<div className='flex justify-start items-center'>
    <p className='text-black font-bold text-5xl'>Employees</p>
  </div>
  <div>
    <p className='break-words space-y-3 text-lg mt-10'>
    It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. 
    Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. 
    Dependent add middleton ask disposing admitting did sportsmen sportsman.

Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar 
impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten you the weather ferrars venture friends. Solid visit seems again you nor all.

 
    </p>
    <div className="w-auto   p-5">
  <Button variant="outlined" href="#" style={{borderColor:"black",color:"black",borderRadius:"30%",letterSpacing:"5px",marginTop:"5px",width:"100%"}}   className="bg-white text-blue-50">Know more</Button>
</div>
  </div>
</div>



</section>





<section>

<section className='flex flex-wrap flex-row'>
  
<img src='/11.jpg' className='p-40 '></img>
  

  <div className='flex flex-col justify-center items-center'>
<p className='font-bold text-4xl text-black text-center'>2013</p>
<p className='text-2xl text-black text-center'>what is the point of your commerce offers</p>
  </div>
</section>


<section className='flex flex-wrap flex-row-reverse'>
  <div>
<img src='/22.jpg' className='p-40 '></img>
  </div>

  <div className='flex flex-col justify-center items-center'>
<p className='font-bold text-4xl text-black text-center'>2015</p>
<p className='text-2xl text-black text-center'>what is the point of your commerce offers</p>
  </div>
</section>

<section className='flex flex-wrap flex-row '>
  <div>
<img src='/33.jpg' className='p-40 '></img>
  </div>

  <div className='flex flex-col justify-center items-center'>
<p className='font-bold text-4xl text-black text-center'>2017</p>
<p className='text-2xl text-black text-center'>what is the point of your commerce offers</p>
  </div>
</section>

 

</section>



<p className='text-center text-black font-bold text-4xl'>Video</p>
<div className='my-20'>
<ReactPlayer width="100%"   url='https://www.youtube.com/watch?v=wWgIAphfn2U' />

</div>

</section>


<section className='w-screen p-20 bg-black'>
  <div className='flex flex-col'>
    <p className='flex justify-start text-3xl items-center text-start text-white'>© 2023 Nakset.  All rights reserved.</p>
    <p className=' text-center text-2xl text-white'>privacy policy</p>

  </div>
</section>






















    </div>
  )
}

export default About