# SET XOR challenge

This is a simple challenge to demonstrate XOR encryption. Students get the following exercise:

> For the new semester, the TUM security office sends new login credentials to each student and staff member. Since these credentials are very sensitive, they are encrypted using a 24-byte-long pre-shared key. Your key is (encoded as hexadecimal) `797762396669796332326D6F6465356961763978726C6464`. The message that contains your credentials is 48 bytes long. To decrypt it, you need to split it into two 24-byte halves and apply the bytewise xor operator to each byte of the message and the key.  
> The message you got from the TUM security office is (hex encoded):
> ```
> 301f105c46071c16575c4d351102540706055d1906090a44
> 0a1e0c5d460e165200010c0d074a535f0f1f0d4e13045109
> ```
>  
> To decrypt this message, you need to use the bitwise xor operator to combine the ciphertext and key byte-by-byte. For more information about the XOR cipher, see: https://en.wikipedia.org/wiki/XOR_cipher
>  
> This tool might be helpful to solve the following exercises: https://set-xor-challenge.dorian.im/
> (Hint: You just have to copy and paste)
>  
> **Exercise one (2 points): Decrypt the message to find out your login credentials!**  
>  
> A mail server security flaw allowed you to read your professor's emails! One of these emails contained his encrypted credentials. However, you don't have access to his decryption key. Can you still find his username and password? 
> The leaked encrypted email to one of your professors is (hex encoded): 
> ```
> 26121516411a08000d0556321d06550811050055410a1f43
> 1c13091741130b445f0d19014703471f0f1d0259030c1515
> ```
>  
> **Exercise two (8 points + 3 bonus points): Find out the key and credentials of your professor!**

## Purpose of this repo

This repo contains a simple webapp which helps with hex/ascii conversion and xor calculation.