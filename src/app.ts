import { app } from "./server";

const port = process.env.PORT;
app.listen(port, () => console.log(`App is listening on port: ${port})`))
