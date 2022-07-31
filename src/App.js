import React, { useState } from "react";
import { Input, VStack, Button, Text } from "@chakra-ui/react";

function App() {
  const [formData, setFormData] = useState({
    height: 0,
    weight: 0,
  });
  const [error, setError] = useState({
    height: "",
    weight: "",
  });
  const [result, SetResult] = useState(0);

  const calculate = (e) => {
    e.preventDefault();

    if (formData.height === 0) {
      setError({ ...error, height: "height can't be zero" });
      return false;
    }

    if (formData.weight === 0) {
      setError({ ...error, weight: "weight can't be zero" });
      return false;
    }

    setError({ height: "", weight: "" });

    const bmi = formData.weight / (formData.height * formData.height);
    SetResult(bmi);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <VStack p={10} spacing="30px" align="center">
      <Text fontSize="3xl">BMI Calculator</Text>
      <form onSubmit={calculate}>
        <Input required m="20px 0 10px" type="number" width="md" name="height" onChange={changeHandler} placeholder="Height(m)" value={formData.height} />
        <p>{error.height}</p>

        <Input required m="20px 0 10px" type="number" width="md" name="weight" onChange={changeHandler} placeholder="Weight(Kg)" value={formData.weight} />
        <p>{error.weight}</p>

        <Button m="20px 0" align="center" colorScheme="blue" variant="solid" type="submit">
          Calculate
        </Button>
      </form>

      {result !== 0 ? <Text fontSize="4xl">BMI: {result}</Text> : null}
    </VStack>
  );
}

export default App;
