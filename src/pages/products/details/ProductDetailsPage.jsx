import {useLoaderData} from "react-router-dom";
import style from "./ProductDetailsPage.module.css"
import {useState} from "react";

function ProductDetailsPage() {

    const product = useLoaderData()
    const [selected, setSelected] = useState(0)

    function onSelectImage(imageId) {
        setSelected(imageId)
    }

    function ProductImages() {
        return product.images.map((image, i) => i !== selected ? <img className={style.imageSmall}
                                                                      key={i}
                                                                      src={image}
                                                                      alt={product.name}
                                                                      onClick={() => onSelectImage(i)}
            /> : ""
        )
    }

    return (
        <div className={style.page}>
            <h1 className={style.title}>{product.name}</h1>
            <div className={style.container}>
                <div>
                    <div>
                        <img src={product.images[selected]}
                             alt={"Image of " + product.name}
                             className={style.imageLarge}
                        />
                    </div>
                    <div>
                        <ProductImages/>
                    </div>
                </div>
                <div>
                    Price: {product.price.toFixed(2)}€
                </div>
            </div>
            <div className={style.container}>
                <div className={style.description}>
                    {product.description}
                </div>
            </div>
        </div>
    )

}

export default ProductDetailsPage