const Admin = req
exports.adminLogin = async (req,res) =>{
    const { email, password } = req.body;
    const admin = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful' });
    });


}