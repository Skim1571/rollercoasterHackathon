const { Schema } = require('mongoose')

const Users = new Schema(
  {
    name: { type: String, required: true },
    email: { email: String, required: true }
    // image: {https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/14/1405356089164/99462175-a42f-4571-ae3f-6b2695d70b94-2060x1236.jpeg?width=620&quality=85&fit=max&s=4031cf77369aa28ed49784d8a0e37f65}
  },
  { timestamps: true }
)

module.exports = Users
