import { createServer, Model } from "miragejs"

createServer({
    models: {
        trucks: Model
    },

    seeds(server) {
        server.create("truck", { id: "1", name: "Desert Ranger", price: 160, description: "The biily bob banger of the east the tuesday special all you need and nothing you dont hot dogs included", imageUrl: "/public/images/desert-ranger.jpg", type: "rugged" })

        server.create("truck", { id: "2", name: "Green Bean", price: 120, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "/public/images/green-bean.jpg", type: "rugged" })

        server.create("truck", { id: "3", name: "Dune Racer", price: 125, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "/public/images/dune-racer.jpg", type: "rugged" })

        server.create("truck", { id: "4", name: "Old School", price: 165, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "/public/images/old-school.jpg", type: "luxury"})

        server.create("truck", { id: "5", name: "Mad Max", price: 90, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "/public/images/mad-max.jpg", type: "luxury" })

        server.create("truck", { id: "6", name: "Green Wonder", price: 60, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "simple" })
    },

    routes() {
        this.namespace = "api"

        this.get("/trucks", (schema, request) => {
            return schema.trucks.all()
        })

        this.get("/trucks/:id", (schema, request) => {
            return schema.trucks.find(id)
        })
    }
})