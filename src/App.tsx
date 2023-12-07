import {
  Center,
  Card,
  Form,
  TextField,
  PasswordField,
  Button,
} from "@prismane/core";
import { useForm } from "@prismane/core/hooks";
import { required, username, min } from "@prismane/core/validators";

function App() {
  const { handleReset, handleSubmit, register } = useForm({
    fields: {
      username: {
        value: "",
        validators: {
          required: (v) => required(v),
          username: (v) => username(v),
        },
      },
      password: {
        value: "",
        validators: {
          required: (v) => required(v),
          min: (v) => min(v, 4),
        },
      },
    },
  });

  return (
    <Center w="100vw" h="100vh">
      <Card>
        <Form
          onSubmit={(e: SubmitEvent) => handleSubmit(e, (v) => console.log(v))}
          onReset={handleReset}
          autoComplete="off"
          autoCorrect="off"
        >
          <TextField
            {...register("username")}
            placeholder="Enter username"
            label="Username:"
          />
          <PasswordField
            {...register("password")}
            placeholder="Enter password"
            label="Password:"
          />
          <Button>Submit Button</Button>
        </Form>
      </Card>
    </Center>
  );
}

export default App;
