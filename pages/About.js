import React from 'react'
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player'

function About() {
  return (
    <div>

<section className='container mx-auto mt-5  '>
<img src="./track.webp" className="container  mx-auto h-1/3 md:h-1/4 "      />

<section className='grid lg:grid-cols-5 grid-cols-1'>
  <div className='col-span-1'></div>
<div className='col-span-3 p-10  ' >
  <div className='flex justify-center items-center'>
    <p className='text-black text-center font-bold text-5xl font-titan'>About us</p>
  </div>
  <div>
    <p className=' space-y-3 text-center text-lg mt-10'>
    The Nakset company (Nakset Fleischhandels Kft), is specialized in animal slaughtering and halal meat processing, offering a wide range of tasty products.
    <br/><br/>


With a purpose to bring, generally, high quality food, and specifically, halal food to Muslims in Europe and satisfy their wants, our operations are organized in accordance with the Islamic rite while respecting the sanitary rules and regulations.
<br/><br/>


The company’s portfolio contains a variety of products which reflect the quality conditions and go through constant evaluation. (see our products)
<br/>
Our main activities revolve around:
<lu>
            <li className="text-black">Slaughtering & cutting: beef and poultry meat slaughtering, cutting and freezing;</li>
            <li className="text-black">Meat processing: specializing in delicatessen, salting/spicing and canning meat.</li>
            


          </lu>
<br/><br/>

          <p>our mission</p>
<br/> 
<p>To give reassurance to every Muslim about halal food by providing the highest quality of halal meat products according to the Islamic rite and in strict compliance with hygiene.</p>
    
<p>our vision</p>
<br/> 
<p>To Serve the best halal meat product, with high quality and no health effect by respecting the hygiene measures and going with natural options instead of chemicals.</p>
    
<p>Employees</p>
<br/> 
<p>Our working environment is characterized by its multiculturalism. The latter nurtures our atmosphere with positive vibes and energy as well as different ideas and mentalities from both genders and different origins, such as Hungary (56.25% employees), Turkey (34.37 % employees), Azerbaijan (3.12% employees), Pakistan (3.12% employees) and Morocco (3.12% employees)</p>
<br/> 
Diversity in terms of culture, age, gender, ethnicity, religion, etc has many advantages on our work and staff:    
    
<lu>
            <li className="text-black">On the one hand, multicultural environment fosters cultural exchange amongst our staff and workers which enriches their general culture.</li>
            <li className="text-black">On the other hand, it retains talented employees, enhances the quality of customer service, inspires creativity and drives innovation as well as makes us better understand our clients and perfectly meet their wants and expectations. </li>
            


          </lu>
          <p className='font-bold'>We appreciate our differences and believe that diverse teams lead to a better business performance.</p>
    
    
    
    
    
    </p>


  </div>

</div>

 

<div className='col-span-1'></div>


</section>





 



<section className="flex justify-center items-center">

<iframe src="https://player.vimeo.com/video/805646193?h=bed2fe7405&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="w-96   md:h-screen md:p-32  md:w-screen  h-96" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Nakset Video.mp4"></iframe>
</section>

<section className='container mx-auto flex flex-col justify-between items-center mt-48 text-center '>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className= 'text-5xl md:text-2xl font-titan  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Our certficates</p>
</div>

<div className='flex flex-col sm:flex-row container mx-auto justify-center items-center align-middle '>
      <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <img src='https://res.cloudinary.com/my-online-store/image/upload/v1675290251/haccp_vi97me.png' width={300} height={300}   />
 

      </div>
    
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <img src='https://res.cloudinary.com/my-online-store/image/upload/v1675290251/halal_nu6njq.jpg' width={300} height={300}    />
 

      </div>
      
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <img src='https://res.cloudinary.com/my-online-store/image/upload/v1675290251/iso_viirsy.jpg' width={300} height={300}     />
 

      </div>
     
    </div>
</div>

</section>

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