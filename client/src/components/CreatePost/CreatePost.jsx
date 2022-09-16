import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
/* import axios from 'axios'; */
import {
    Stack, Input, Text, Textarea, Flex, NumberInput, NumberInputField,
    NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
    Checkbox, CheckboxGroup, Select, Button, /* FormControl, */ FormLabel, Box,
} from '@chakra-ui/react';

const CreatePost = () => {

    const propertys = useSelector((state) => state.typeOfProperties);
    const services = useSelector((state) => state.services);

    const [infoFormProp, setInfoFormProp] = useState({
        city: "",
        address: "",
        propImg: "",
        typProp: "",
        price: "",
        age: "",
        surface: "",
        environments: "",
        bathrooms: "",
        rooms: "",
        garage: "",
        yard: "",
        pets: false,
        service: []
    });

    const [infoFormPub, setInfoFormPub] = useState({
        description: "",
        status: "",
        premium: false,
        report: "",
        id: null
    })

    const [disableBUttonSubmit, setDisableButtonSubmit] = useState(true);

    useEffect(() => {

        const { city, address, surface, price, environments, bathrooms, rooms, garage, yard, age } = infoFormProp

        if (!city || !address || !surface || !price || !environments || !bathrooms || !rooms || !garage || !yard || !age) {
            setDisableButtonSubmit(true)
        }
        else {
            setDisableButtonSubmit(false)
        }

    }, [setDisableButtonSubmit, infoFormProp])

    const onChangeInputProp = (e) => {
        e.preventDefault();

        setInfoFormProp({
            ...infoFormProp,
            [e.target.name]: e.target.value,
        })
    }

    const onChangeInputPub = (e) => {
        e.preventDefault();

        setInfoFormPub({
            ...infoFormPub,
            [e.target.name]: e.target.value,
        })
    }

    const selectCheckBoxService = (e) => {

        if (e.target.checked === false) {
            setInfoFormProp({
                ...infoFormProp,
                service: infoFormProp.service.filter(s => s !== e.target.value)
            })
        } else {
            setInfoFormProp({
                ...infoFormProp,
                service: [...infoFormProp.service, e.target.value]
            });
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        console.log(infoFormProp)

        /* try {
            return await axios.post('http://localhost:3001/publication/createProperty', { ...infoFormProp })
        } catch (err) {
            console.log(err)
        } */
    }

    return (
        <Flex gap={'2rem'} position='relative' m={'1rem'} p={'1rem'} justifyContent={'center'} wrap='wrap' borderWidth='1px' borderRadius='14px' overflow='hidden'>

            <Text w={'90%'} textAlign={"center"} fontSize='2em'>Formulario de Creación de Propiedad</Text>

            <Box display={'flex'} flexDirection={'column'} p={'1rem'} w={'45%'} gap='.5rem' borderWidth='1px' borderRadius='14px' overflow='hidden'>

                <FormLabel >Ciudad
                    <Input type="text" name={"city"} value={infoFormProp.city} onChange={onChangeInputProp} />
                </FormLabel>

                <FormLabel >Dirección
                    <Input type="text" name={"address"} value={infoFormProp.address} onChange={onChangeInputProp} />
                </FormLabel >

                <FormLabel >Imagen
                    <Input type="text" name={"propImg"} value={infoFormProp.propImg} onChange={onChangeInputProp} />
                </FormLabel>

                <FormLabel >Tipo de propiedad
                    <Select name={"typProp"} onChange={onChangeInputProp} >
                        {propertys.map((type, i) => <option key={i}
                            value={type.name}
                        >{type.name}
                        </option>)}
                    </Select>
                </FormLabel>

                <FormLabel > Precio
                    <NumberInput value={infoFormProp.price}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, price: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel >Antigüedad
                    <NumberInput value={infoFormProp.age}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, age: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper  >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel > Superficie
                    <NumberInput value={infoFormProp.surface}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, surface: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel > Ambientes
                    <NumberInput value={infoFormProp.environments}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, environments: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper type="number" name={"environments"} value={infoFormProp.environments} onChange={onChangeInputProp}>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel > Baños
                    <NumberInput value={infoFormProp.bathrooms}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, bathrooms: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel > Habitaciones
                    <NumberInput value={infoFormProp.rooms}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, rooms: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel > Garage
                    <NumberInput value={infoFormProp.garage}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, garage: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper  >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <FormLabel >Patios
                    <NumberInput value={infoFormProp.yard}
                        onChange={(value) => setInfoFormProp({ ...infoFormProp, yard: value })}
                        min={0}>
                        <NumberInputField />
                        <NumberInputStepper >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormLabel>

                <CheckboxGroup colorScheme='green' >
                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        <Checkbox name={"pets"}
                            onChange={(e) => setInfoFormProp({
                                ...infoFormProp,
                                [e.target.name]: (e.target.checked === true)
                            })}>
                            Mascotas
                        </Checkbox>
                    </Stack>
                </CheckboxGroup>

                <CheckboxGroup colorScheme='green' >
                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        {services.map((s, i) => <Checkbox key={i}
                            name={s.name}
                            value={s.name}
                            onChange={selectCheckBoxService} >
                            {s.name[0].toUpperCase() + s.name.substring(1)}
                        </Checkbox>)}
                    </Stack>
                </CheckboxGroup>

                <Button disabled={disableBUttonSubmit}
                    alignSelf={'flex-end'}
                    colorScheme='blue'
                    type="submit"
                    value={"enviar"}
                    onClick={onSubmitForm}>
                    Enviar
                </Button>
            </Box>

            <Box display={'flex'} flexDirection={'column'} p={'1rem'} w={'45%'} gap='.5rem' borderWidth='1px' borderRadius='14px' overflow='hidden' >

                <FormLabel borderWidth='1px' borderRadius='14px' p={"1rem"} borderColor={"gray.200"}>
                    <Text mb='8px'>Descripcion</Text>
                    <Textarea borderRadius='8px'
                        name={'description'}
                        value={infoFormPub.description}
                        size='sm'
                        resize={"none"}
                        onChange={onChangeInputPub}
                    />
                </FormLabel>

                <FormLabel >Estado
                    <Input type="text" name={"status"} value={infoFormPub.status} onChange={onChangeInputPub} />
                </FormLabel>

                <FormLabel >Reporte
                    <Input type="text" name={"report"} value={infoFormPub.report} onChange={onChangeInputPub} />
                </FormLabel>

                <CheckboxGroup colorScheme='green' >
                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        <Checkbox name={"premium"}
                            onChange={(e) => setInfoFormPub({
                                ...infoFormPub,
                                [e.target.name]: (e.target.checked === true)
                            })}>
                            Premium
                        </Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
            
        </Flex>
    );
};

export default CreatePost;

