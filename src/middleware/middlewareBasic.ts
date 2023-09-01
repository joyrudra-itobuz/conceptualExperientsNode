function middleware(name: string) {
  return `Hi ${name} I'm a Middleware`;
}

function errorHandler(error: Error) {
  console.log("Oops Some Error Has Occurred!");
  console.error(error);
}

function one(name: string, surname: string) {
  return two(middleware, name, surname);
}
function two(
  callback: (name: string) => string,
  name: string,
  surname: string
) {
  try {
    const fullName = `${name} ${surname}`;
    if (fullName.length < 4) {
      throw new Error("Invalid Full Name!");
      /* return errorHandler(new Error("More")); */
    }

    return three(callback, fullName);
  } catch (error) {
    if (error instanceof Error) errorHandler(error);
  }
}

function three(callback: (name: string) => string, fullName: string) {
  console.log(`I'm Function 3 and Let me Share The Results`);
  return callback(fullName);
}

export default one;
