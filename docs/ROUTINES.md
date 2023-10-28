# Routines

> **Labels**\
> ⚫ - Invalid\
> 🔴 - Test failed or zero coverage\
> 🟡 - Test passed without full coverage\
> 🟢 - Test passed with full coverage

## Level 1

### Single
🟡 **SROTG** - setup Givens rotation\
🔴 **SROTMG** - setup modified Givens rotation\
🔴 **SROT** - apply Givens rotation\
🔴 **SROTM** - apply modified Givens rotation\
🟢 **SSWAP** - swap x and y\
🔴 **SSCAL** - x = a\*x\
🟢 **SCOPY** - copy x into y\
🔴 **SAXPY** - y = a\*x + y\
🔴 **SDOT** - dot product\
🔴 **SDSDOT** - dot product with extended precision accumulation\
🔴 **SNRM2** - Euclidean norm\
🔴 SCNRM2- Euclidean norm\
🔴 **SASUM** - sum of absolute values\
🔴 **ISAMAX** - index of max abs value

### Double
🔴 **DROTG** - setup Givens rotation\
🔴 **DROTMG** - setup modified Givens rotation\
🔴 **DROT** - apply Givens rotation\
🔴 **DROTM** - apply modified Givens rotation\
🟢 **DSWAP** - swap x and y\
🔴 **DSCAL** - x = a\*x\
🟢 **DCOPY** - copy x into y\
🔴 **DAXPY** - y = a\*x + y\
🔴 **DDOT** - dot product\
🔴 **DSDOT** - dot product with extended precision accumulation\
🔴 **DNRM2** - Euclidean norm\
🔴 **DZNRM2** - Euclidean norm\
🔴 **DASUM** - sum of absolute values\
🔴 **IDAMAX** - index of max abs value

### Complex
⚫ **CROTG** - setup Givens rotation\
⚫ **CSROT** - apply Givens rotation\
🔴 **CSWAP** - swap x and y\
⚫ **CSCAL** - x = a\*x\
⚫ **CSSCAL** - x = a\*x\
🔴 **CCOPY** - copy x into y\
⚫ **CAXPY** - y = a\*x + y\
⚫ **CDOTU** - dot product\
⚫ **CDOTC** - dot product, conjugating the first vector\
⚫ **SCASUM** - sum of absolute values\
⚫ **ICAMAX** - index of max abs value

### Double Complex
⚫ **ZROTG** - setup Givens rotation\
⚫ **ZDROT** - apply Givens rotation\
🔴 **ZSWAP** - swap x and y\
⚫ **ZSCAL** - x = a\*x\
⚫ **ZDSCAL** - x = a\*x\
🔴 **ZCOPY** - copy x into y\
⚫ **ZAXPY** - y = a\*x + y\
⚫ **ZDOTU** - dot product\
⚫ **ZDOTC** - dot product, conjugating the first vector\
⚫ **DZASUM** - sum of absolute values\
⚫ **IZAMAX** - index of max abs value

## Level 2

### Single
⚫ **SGEMV** - matrix vector multiply\
⚫ **SGBMV** - banded matrix vector multiply\
⚫ **SSYMV** - symmetric matrix vector multiply\
⚫ **SSBMV** - symmetric banded matrix vector multiply\
⚫ **SSPMV** - symmetric packed matrix vector multiply\
⚫ **STRMV** - triangular matrix vector multiply\
⚫ **STBMV** - triangular banded matrix vector multiply\
⚫ **STPMV** - triangular packed matrix vector multiply\
⚫ **STRSV** - solving triangular matrix problems\
⚫ **STBSV** - solving triangular banded matrix problems\
⚫ **STPSV** - solving triangular packed matrix problems\
⚫ **SGER** - performs the rank 1 operation A := alpha\*x\*y' + A\
⚫ **SSYR** - performs the symmetric rank 1 operation A := alpha\*x\*x' + A\
⚫ **SSPR** - symmetric packed rank 1 operation A := alpha\*x\*x' + A\
⚫ **SSYR2** - performs the symmetric rank 2 operation, A := alpha\*x\*y' + alpha\*y\*x' + A\
⚫ **SSPR2** - performs the symmetric packed rank 2 operation, A := alpha\*x\*y' + alpha\*y\*x' + A

### Double
⚫ **DGEMV** - matrix vector multiply\
⚫ **DGBMV** - banded matrix vector multiply\
⚫ **DSYMV** - symmetric matrix vector multiply\
⚫ **DSBMV** - symmetric banded matrix vector multiply\
⚫ **DSPMV** - symmetric packed matrix vector multiply\
⚫ **DTRMV** - triangular matrix vector multiply\
⚫ **DTBMV** - triangular banded matrix vector multiply\
⚫ **DTPMV** - triangular packed matrix vector multiply\
⚫ **DTRSV** - solving triangular matrix problems\
⚫ **DTBSV** - solving triangular banded matrix problems\
⚫ **DTPSV** - solving triangular packed matrix problems\
⚫ **DGER** - performs the rank 1 operation A := alpha\*x\*y' + A\
⚫ **DSYR** - performs the symmetric rank 1 operation A := alpha\*x\*x' + A\
⚫ **DSPR** - symmetric packed rank 1 operation A := alpha\*x\*x' + A\
⚫ **DSYR2** - performs the symmetric rank 2 operation, A := alpha\*x\*y' + alpha\*y\*x' + A\
⚫ **DSPR2** - performs the symmetric packed rank 2 operation, A := alpha\*x\*y' + alpha\*y\*x' + A

### Complex
⚫ **CGEMV** - matrix vector multiply\
⚫ **CGBMV** - banded matrix vector multiply\
⚫ **CHEMV** - hermitian matrix vector multiply\
⚫ **CHBMV** - hermitian banded matrix vector multiply\
⚫ **CHPMV** - hermitian packed matrix vector multiply\
⚫ **CTRMV** - triangular matrix vector multiply\
⚫ **CTBMV** - triangular banded matrix vector multiply\
⚫ **CTPMV** - triangular packed matrix vector multiply\
⚫ **CTRSV** - solving triangular matrix problems\
⚫ **CTBSV** - solving triangular banded matrix problems\
⚫ **CTPSV** - solving triangular packed matrix problems\
⚫ **CGERU** - performs the rank 1 operation A := alpha\*x\*y' + A\
⚫ **CGERC** - performs the rank 1 operation A := alpha\*x\*conjg(y') + A\
⚫ **CHER** - hermitian rank 1 operation A := alpha\*x\*conjg(x') + A\
⚫ **CHPR** - hermitian packed rank 1 operation A := alpha\*x\*conjg(x') + A\
⚫ **CHER2** - hermitian rank 2 operation\
⚫ **CHPR2** - hermitian packed rank 2 operation

### Double Complex
⚫ **ZGEMV** - matrix vector multiply\
⚫ **ZGBMV** - banded matrix vector multiply\
⚫ **ZHEMV** - hermitian matrix vector multiply\
⚫ **ZHBMV** - hermitian banded matrix vector multiply\
⚫ **ZHPMV** - hermitian packed matrix vector multiply\
⚫ **ZTRMV** - triangular matrix vector multiply\
⚫ **ZTBMV** - triangular banded matrix vector multiply\
⚫ **ZTPMV** - triangular packed matrix vector multiply\
⚫ **ZTRSV** - solving triangular matrix problems\
⚫ **ZTBSV** - solving triangular banded matrix problems\
⚫ **ZTPSV** - solving triangular packed matrix problems\
⚫ **ZGERU** - performs the rank 1 operation A := alpha\*x\*y' + A\
⚫ **ZGERC** - performs the rank 1 operation A := alpha\*x\*conjg(y') + A\
⚫ **ZHER** - hermitian rank 1 operation A := alpha\*x\*conjg(x') + A\
⚫ **ZHPR** - hermitian packed rank 1 operation A := alpha\*x\*conjg(x') + A\
⚫ **ZHER2** - hermitian rank 2 operation\
⚫ **ZHPR2** - hermitian packed rank 2 operation

## Level 3

### Single
⚫ **SGEMM** - matrix matrix multiply\
⚫ **SSYMM** - symmetric matrix matrix multiply\
⚫ **SSYRK** - symmetric rank-k update to a matrix\
⚫ **SSYR2K** - symmetric rank-2k update to a matrix\
⚫ **STRMM** - triangular matrix matrix multiply\
⚫ **STRSM** - solving triangular matrix with multiple right hand sides

### Double
⚫ **DGEMM** - matrix matrix multiply\
⚫ **DSYMM** - symmetric matrix matrix multiply\
⚫ **DSYRK** - symmetric rank-k update to a matrix\
⚫ **DSYR2K** - symmetric rank-2k update to a matrix\
⚫ **DTRMM** - triangular matrix matrix multiply\
⚫ **DTRSM** - solving triangular matrix with multiple right hand sides

### Complex
⚫ **CGEMM** - matrix matrix multiply\
⚫ **CSYMM** - symmetric matrix matrix multiply\
⚫ **CHEMM** - hermitian matrix matrix multiply\
⚫ **CSYRK** - symmetric rank-k update to a matrix\
⚫ **CHERK** - hermitian rank-k update to a matrix\
⚫ **CSYR2K** - symmetric rank-2k update to a matrix\
⚫ **CHER2K** - hermitian rank-2k update to a matrix\
⚫ **CTRMM** - triangular matrix matrix multiply\
⚫ **CTRSM** - solving triangular matrix with multiple right hand sides

### Double Complex
⚫ **ZGEMM** - matrix matrix multiply\
⚫ **ZSYMM** - symmetric matrix matrix multiply\
⚫ **ZHEMM** - hermitian matrix matrix multiply\
⚫ **ZSYRK** - symmetric rank-k update to a matrix\
⚫ **ZHERK** - hermitian rank-k update to a matrix\
⚫ **ZSYR2K** - symmetric rank-2k update to a matrix\
⚫ **ZHER2K** - hermitian rank-2k update to a matrix\
⚫ **ZTRMM** - triangular matrix matrix multiply\
⚫ **ZTRSM** - solving triangular matrix with multiple right hand sides
