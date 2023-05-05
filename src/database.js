import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://eduatlas:bgojmj336@usuarios.y83huny.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Base de datos conectada", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
