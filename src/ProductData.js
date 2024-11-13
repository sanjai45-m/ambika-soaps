// src/productData.js
import soapImage from "./assets/second.jpg";
import aloevera from "./assets/soap/aloevera-soap.jpg";
import avarampoosoap from "./assets/soap/avarampoo-soap.jpg";
import charcoalsoap from "./assets/soap/charcoal-soap.jpg";
import coconutsoap from "./assets/soap/coconut-milk-soap.jpg";
import detansoap from "./assets/soap/detan_soap.jpeg";
import kasturimanjalsoap from "./assets/soap/kasturi-manjal-soap.jpg";
import papayasoap from "./assets/soap/papaya-soap.jpg";
import skinsofteningsoap from "./assets/soap/skin-softening-soap.jpg";
import tulsisoap from "./assets/soap/tulsi-soap.jpg";
import winesoap from "./assets/soap/wine-soap.jpg";
import HairBLack from "./assets/oil/Hair Blackening oil.jpg";
import HerbalHairOil from "./assets/oil/Herbal hair oil.jpg";
import NaturalHaiDye from "./assets/oil/Natural hair dye.jpg";
import Rosemaryhairoil from "./assets/oil/Rosemary hair oil.jpg";
import Rosemaryhairserum from "./assets/oil/Rosemary hair serum.jpg";
import RosemaryHairSpray from "./assets/oil/Rosemary Hair Spray.jpg";
import Almondoil from "./assets/Serums and body oils/Almond oil.jpg";
import Avarampoooil from "./assets/Serums and body oils/Avarampoo oil.jpg";
import Grapeserum from "./assets/Serums and body oils/Grape serum.jpg";
import Orangeserum from "./assets/Serums and body oils/Orange serum.jpg";
import Kajal from "./assets/Beauty and skin care products/Kajal.jpg";
import LipBalm from "./assets/Beauty and skin care products/Lipbalm.jpg";
import AloeVeraGel from "./assets/Beauty and skin care products/Aloevera gel.jpg";
import RoseFacePack from "./assets/Beauty and skin care products/Rose face pack.jpg";
import OrangeFacePack from "./assets/Beauty and skin care products/Orange face pack.jpg";
import LemonFacePack from "./assets/Beauty and skin care products/Lemon face pack.jpg";
import HibiscusGel from "./assets/Beauty and skin care products/Hibiscus gel.jpg";
import HibiscusFacePack from "./assets/Beauty and skin care products/Hibiscus face pack.jpg";
import LemonSyrups from "./assets/Syrups and Jams/Lemon syrup.jpg";
import FruitJams from "./assets/Syrups and Jams/Fruit jam.jpg";
import RosemilkSyrup from "./assets/Syrups and Jams/Rosemilk syrup.jpg";
import NannariSarbathSyrup from "./assets/Syrups and Jams/Nannari sarbath syrup.jpg";
import PineappleSyrup from "./assets/Syrups and Jams/Pineapple syrup.jpg";
import ProteinPowder from "./assets/powders/Protein powder.jpg";
import MoringaLeavesPowder from "./assets/powders/Moringa leaves powder.jpg";
import HennaPowder from "./assets/powders/Henna powder.jpg";


const products = [
    {
        id: 1,
        name: "Herbal Soap",
        image: soapImage,
        description: "Experience the purity of nature with every wash—gentle, refreshing, and all-natural",
        subproducts: [
            { id: 1.1, name: "Aloevera Soap", image: aloevera, price: 50, discountPrice: 60 },
            { id: 1.2, name: "Avarampoo Soap", image: avarampoosoap, price:75, discountPrice: 85 },
            { id: 1.3, name: "Charcoal Soap", image: charcoalsoap, price: 75, discountPrice: 85 },
            { id: 1.4, name: "Coconut Soap", image: coconutsoap, price: 50, discountPrice: 60 },
            { id: 1.5, name: "Detan Soap", image: detansoap, price: 50, discountPrice: 60 }, 
            { id: 1.6, name: "Kasturimanjal Soap", image: kasturimanjalsoap, price: 75, discountPrice: 85 },
            { id: 1.7, name: "Papaya Soap", image: papayasoap, price: 75, discountPrice: 85 },
            { id: 1.8, name: "Skinsoftening Soap", image: skinsofteningsoap, price: 50, discountPrice: 60 },
            { id: 1.9, name: "Tulsi Soap", image: tulsisoap, price: 50, discountPrice: 60 },
            { id: 1.11, name: "Wine Soap", image: winesoap, price: 50, discountPrice: 60 },
        ],
    },
    {
        id: 2,
        name: "Hair care products",
        image: Rosemaryhairoil,
        description: "Nourish and reveal your hair's natural shine.",
        subproducts: [
            { id: 2.1, name: "Hair Blackening oil", image: HairBLack, price: 130, discountPrice: 150 },
            { id: 2.2, name: "Herbal hair oil", image: HerbalHairOil,price: 100, discountPrice: 120 },
            { id: 2.3, name: "Rosemary hair oil", image: Rosemaryhairoil, price: 130, discountPrice: 150},
            { id: 2.4, name: "Rosemary hair serum", image: Rosemaryhairserum, price: 25, discountPrice: 20 },
            { id: 2.4, name: "Natural Hair Dye", image: NaturalHaiDye, price: 100, discountPrice: 130 },

            { id: 2.5, name: "Rosemary Hair Spray", image: RosemaryHairSpray, price: 130, discountPrice: 150 },
        ],
    },
    {
        id: 3,
        name: "Serums and body oils",
        image: Grapeserum,
        description: "Serums and body oils: nourishing blends for glowing, healthy skin.",
        subproducts: [
            { id: 3.1,name: "Almond oil", image: Almondoil, price: 100, discountPrice: 110},
            { id: 3.2, name: "Avarampoo oil", image: Avarampoooil, price: 100, discountPrice: 110},
            { id: 3.3, name: "Grape serum", image: Grapeserum, price: 100, discountPrice: 130 },
            { id: 3.3, name: "Orange serum", image: Orangeserum,price: 100, discountPrice: 130},

        ],
    },
    {
        id: 4,
        name: "Beauty and skin care products",
        image: Kajal,
        description: "Glow naturally with our luxurious, all-natural skincare.",
        subproducts: [
            { id: 4.1, name: "Kajal", image: Kajal, price: 20, discountPrice: 35 },
            { id: 4.2, name: "Lip Balm", image: LipBalm, price: 20, discountPrice: 40 },
            { id: 4.3, name: "Aloe Vera Gel", image: AloeVeraGel,price: 50, discountPrice: 70},
            { id: 4.4, name: "Rose Face Pack", image: RoseFacePack, price: 50, discountPrice: 70 },
            { id: 4.5, name: "Orange Face Pack", image: OrangeFacePack,price: 50, discountPrice: 70},
            { id: 4.6, name: "Lemon Face Pack", image: LemonFacePack,price: 50, discountPrice: 70 },
            { id: 4.7, name: "Hibiscus Gel", image: HibiscusGel,price: 50, discountPrice: 70},
            { id: 4.8, name: "Hibiscus Face Pack", image: HibiscusFacePack, price: 50, discountPrice: 70 },
            
        ],
    }
,    
{
    id: 5,
    name: "Syrups and Jams",
    image: RosemilkSyrup,
    description: "Enjoy the pure, fruity goodness of our handcrafted syrups and jams.",
    subproducts: [
        { id: 5.1, name: "Lemon Syrup", image: LemonSyrups, price: 70, discountPrice: 80},
        { id: 5.2, name: "Fruit Jam", image: FruitJams, price: 50, discountPrice: 60 },
        { id: 5.3, name: "Rosemilk Syrup", image: RosemilkSyrup, price: 70, discountPrice: 80 },
        { id: 5.4, name: "Nannari Sarbath Syrup", image: NannariSarbathSyrup, price: 70, discountPrice: 80 },
        { id: 5.5, name: "Pineapple Syrup", image: PineappleSyrup,  price: 70, discountPrice: 80 },
    ],
}
,
{
    id: 6,
    name: "Protein Powder and Herbal Powders",
    image: ProteinPowder,
    description: "Enhance your health with our protein and herbal powders.",
    subproducts: [
        { id: 6.1, name: "Protein Powder", image: ProteinPowder, price: 250, discountPrice: 270 },
        { id: 6.2, name: "Moringa Leaves Powder", image: MoringaLeavesPowder, price: 250, discountPrice: 270 },
        { id: 6.3, name: "Henna Powder", image: HennaPowder, price: 250, discountPrice: 270 },
    ],
}

];

export default products;
