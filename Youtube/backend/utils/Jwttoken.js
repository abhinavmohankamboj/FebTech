import jwt from 'jsonwebtoken';

export async function generateToken(data) {
  try {
    const { Email, _id } = data;
    const accessToken = jwt.sign({ Email, _id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const options = {
      httpOnly: true,
      expire: new Date(Date.now() * 7 * 24 * 60 * 60 * 1000)
    };

    return { accessToken, options };

    
  } catch (error) {
    console.log("token generation error", error);
  }
}
