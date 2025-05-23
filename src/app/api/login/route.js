import path from "path";
import { promises as fs } from "fs";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  try {
    if (!email || !password) {
      return new Response(
        JSON.stringify({ success: false, message: "Credenciales inválidas" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const filePath = path.join(process.cwd(), "public", "users.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(fileData);
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      return new Response(
        JSON.stringify({ success: true, message: "Inicio de sesión exitoso" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `user=${JSON.stringify(
              user
            )}; Path=/; HttpOnly; SameSite=Strict`,
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Credenciales inválidas" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error en el servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
