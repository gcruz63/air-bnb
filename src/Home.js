import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className='home_section'>
                <Card
                    src={"https://a0.muscache.com/im/pictures/miso/Hosting-51827156/original/99e83f2f-9649-47bb-b913-3b4dc4101259.jpeg?im_w=720"}
                    title="Beautiful stay"
                    description="Unique activities you can do."

                />
                <Card
                    src={"https://a0.muscache.com/im/pictures/prohost-api/Hosting-47114758/original/ddaf84b3-36da-4785-b2f2-119900115a67.jpeg?im_w=720"}
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."

                />
                <Card
                    src={"https://a0.muscache.com/im/pictures/prohost-api/Hosting-53644883/original/4cf4105b-5551-4f4b-b3ac-19f58a217849.jpeg?im_w=720"}
                    title="Entire"
                    description="Comfortable private places, with room for friends or family"
                />
            </div>
            <div className='home_section'>
                <Card
                    src="https://imageio.forbes.com/specials-images/imageserve/5cf6d6619736330008ab0cd2/0x0.jpg?format=jpg&width=720"
                    title="Penthouse in New York"
                    description="Amazing view over the city"
                    price="$1,200/Night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/3c7eabda-a489-4283-9454-dbe030450238.jpg?im_w=720"
                    title="5 Bedroom in Malibu"
                    description="Superhost with a stunning view over the beach."
                    price="$2,000/Night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/ae5f3e0d-da0d-4155-b350-eaeac7d5abf5.jpg?im_w=720"
                    title="In the wild"
                    description="A nice little cottage"
                    price="$130/Night"
                />
            </div>
        </div>
    )
}

export default Home