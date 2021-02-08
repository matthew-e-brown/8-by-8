# 8-by-8 Byte Array Thingy

Draw an 8x8 pixel drawing on the grid and you'll get an array of bytes on the
side. They're converted to decimal. As in,

```
[ 00000000 ] in binary ==> [   0 ] in decimal
[ 01000010 ] in binary ==> [  66 ] in decimal
[ 01100110 ] in binary ==> [ 102 ] in decimal
[ 01100110 ] in binary ==> [ 102 ] in decimal
[ 00011000 ] in binary ==> [  24 ] in decimal
[ 00111100 ] in binary ==> [  60 ] in decimal
[ 00100100 ] in binary ==> [  36 ] in decimal
[ 00000000 ] in binary ==> [   0 ] in decimal

==> { 0, 66, 102, 102, 24, 60, 36, 0 };
```

This was created to help out a buddy who needs to do this "8-by-8 drawing to
byte array" thing a bunch. Having a small webapp do it for you is far less
tedious. 😁