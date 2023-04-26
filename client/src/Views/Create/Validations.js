const validations = (dogData, errors, setErrors) => {
    //image
    if(!dogData.image)
        setErrors({ ...errors, image: "Por favor ingresa la URL de una imagen en este campo" });
    else {
        setErrors({ ...errors, image: "" });
        }
    
    // name
    if (!dogData.name)
      setErrors({ ...errors, name: "Por favor completa este campo" });
    else if (dogData.name.length > 10)
      setErrors({ ...errors, name: "No puede superar los 10 caracteres" });
      else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(dogData.name)
    ) {
      setErrors({ ...errors, name: "Nombre inválido, solo debe incluir letras" });
    } else {
      setErrors({ ...errors, name: "" });
    }
    
    // height
    if(!dogData.height)
        setErrors({ ...errors, height: "Por favor ingresa una estatura en este campo" });
    else {
        setErrors({ ...errors, height: "" });
       }
    
    // weight
    if(!dogData.weight)
        setErrors({ ...errors, weight: "Por favor ingresa un peso en este campo" });
    else {
        setErrors({ ...errors, weight: "" });
        }
        
    // life_span
    if(!dogData.life_span)
        setErrors({ ...errors, life_span: "Por favor ingresa una esperanza de vida en este campo" });
    else {
        setErrors({ ...errors, life_span: "" });
        }
    
        // temperaments
    if(!dogData.temperament)
        setErrors({ ...errors, temperament: "Por favor selecciona temperamentos" });
    else {
        setErrors({ ...errors, temperament: "" });
        }
    }

export default validations;
