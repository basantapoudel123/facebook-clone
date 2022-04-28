import React from 'react';
import './Storyreel.css';
import Story from "./Story";

function StoryReel(){
    return( <div className="storyreel">
        
        <Story
         image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
         profileSrc="https://static.remove.bg/remove-bg-web/8fb1a6ef22fefc0b0866661b4c9b922515be4ae9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
         title="Jasita Smith" />
        
        <Story
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU"
         profileSrc="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
         title="Harey Adom" />

        <Story
         image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
         profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnLP_Of-GfsDEYKQj3ZQIJlBe7wS2qL74gA&usqp=CAU"
         title="Lana Khalifa" />
        
        <Story
         image="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
         profileSrc="https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg"
         title="Saint Sangaa" />

         <Story
         image="https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg"
         profileSrc="https://dp.profilepics.in/profile_pictures/beautiful-profile-pics-dp/beautiful-profile-pics-1442.jpg"
         title="Jenny Puth" />

        
        

    </div>

    );
}
export default StoryReel;