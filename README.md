# SET XOR challenge

This is a simple challenge to demonstrate XOR encryption. Students get the following exercise:

> For the new semester, the TUM security office sends new login credentials to each student and staff member. Since these credentials are very sensitive, they are encrypted using a 24-Byte long pre shared key. Your key is (encoded as hexadecimal) `797762396669796332326D6F6465356961763978726C6464`. The message which contains your credentials is 48-bytes long. To Decrypt it, you need to split it in two 24-byte long halves and apply the bytwise xor opperator to each byte of the message and the key.
> The message you got from the TUM security office is (encoded as hexadecimal):
> ```
> 301f105c46071c16575c4d351102540706055d1906090a44
> 0a1e0c5d460e165200010c0d074a535f0f1f0d4e13045109
> ```
>
> To decrypt this message, you need to use the bitwise xor operator to combine the ciphertext and key byte-by byte. For more information about the XOR cipher, see: https://en.wikipedia.org/wiki/XOR_cipher
>
> **Exercise one (2 points): Decrypt the message to find out your login credentials!**
>
> Due to a mailserver breach, some encrypted credentials, together with the corresponding email addresses, were leaked. You noticed, that this leak also contained the mail address of one of your professors. 
> The leaked encrypted credentials of your professor are (encoded as hexadecimal):
> ```
> 26121516411a08000d0556321d06550811050055410a1f43
> 1c13091741130b445f0d19014703471f0f1d0259030c1515
> ```
>
> **Exercise two (8 points + 3 bonus points): Find out the key and credentials of your professor!**

## Purpose of this repo

This repo contains a simple webapp which helps with hex/ascii conversion and xor calculation.