import User from '../services/User';

class SessaoController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as { email: string; password: string } | unknown;

    if (!email) {
      return res.status(400).json({ error: 'campo email obrigatório' })
    }

    if (!password) {
      return res.status(400).json({ error: 'campo senha obrigatório' })
    }

    const usuario = await User.showByEmail(email);

    if (!usuario) {
      return res.status(400).json({ error: 'Usuário não existe' })
    }

    if (!(await usuario.comparePassword(password))) {
      return res.status(400).json({ error: 'Senha incorreta' })
    }

    delete usuario.password;

    return res.json({
      usuario,
      token: usuario.generateToken(),
    });
  }
}

export default new SessaoController();
