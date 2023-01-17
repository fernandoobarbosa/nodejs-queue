import Mail from "../lib/Mail";

export default {
  key: "UserReport",
  async handle({data}) {

    const { user } = data;

    await Mail.sendMail({
      from: "User Test <queue@queutest.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "User Report",
      html: `Olá, ${user.name}, reportado!`,
    });
  },
};
