/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Tue, 04 Mar 2014 11:05:15 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * This brush was originally created by UNique
 * homepage:   http://un-i.tistory.com/
 * brush page: <unknown>
 */
SyntaxHighlighter.brushes.Nasm8086 = function() {
    var A = "MOV CMOVE CMOVZ CMOVNE CMOVNZ CMOVA CMOVNBE CMOVAE CMOVNB CMOVB CMOVNAE CMOVBE CMOVNA CMOVG CMOVNLE CMOVGE CMOVNL CMOVL CMOVNGE CMOVLE CMOVNG CMOVC CMOVNC CMOVO CMOVNO CMOVS CMOVNS CMOVP CMOVPE CMOVNP CMOVPO XCHG BSWAP XADD CMPXCHG CMPXCHG8B PUSH POP PUSHA PUSHAD POPA POPAD IN OUT CWD CDQ CBW CWDE MOVSX MOVZX ADD ADC SUB SBB IMUL MUL IDIV DIV INC DEC NEG CMP DAA DAS AAA AAS AAM AAD AND OR XOR NOT SAR SHR SAL SHL SHRD SHLD ROR ROL RCR RCL BT BTS BTR BTC BSF BSR SETE SETZ SETNE SETNZ SETA SETNBE SETAE SETNB SETNC SETB SETNAE SETC SETBE SETNA SETG SETNLE SETGE SETNL SETL SETNGE SETLE SETNG SETS SETNS SETO SETNO SETPE SETP SETPO SETNP TEST JMP JE JZ JNE JNZ JA JNBE JAE JNB JB JNAE JBE JNA JG JNLE JGE JNL JL JNGE JLE JNG JC JNC JO JNO JS JNS JPO JNP JPE JP JCXZ JECXZ LOOP LOOPZ LOOPE LOOPNZ LOOPNE CALL RET IRET INT INTO BOUND ENTER LEAVE MOVS MOVSB MOVS MOVSW MOVS MOVSD CMPS CMPSB CMPS CMPSW CMPS CMPSD SCAS SCASB SCAS SCASW SCAS SCASD LODS LODSB LODS LODSW LODS LODSD STOS STOSB STOS STOSW STOS STOSD REP REPE REPZ REPNE REPNZ INS INSB INS INSW INS INSD OUTS OUTSB OUTS OUTSW OUTS OUTSD STC CLC CMC CLD STD LAHF SAHF PUSHF PUSHFD POPF POPFD STI CLI LDS LES LFS LGS LSS LEA NOP UB2 XLAT XLATB CPUID  mov cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo xchg bswap xadd cmpxchg cmpxchg8b push pop pusha pushad popa popad in out cwd cdq cbw cwde movsx movzx add adc sub sbb imul mul idiv div inc dec neg cmp daa das aaa aas aam aad and or xor not sar shr sal shl shrd shld ror rol rcr rcl bt bts btr btc bsf bsr sete setz setne setnz seta setnbe setae setnb setnc setb setnae setc setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp test jmp je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp jcxz jecxz loop loopz loope loopnz loopne call ret iret int into bound enter leave movs movsb movs movsw movs movsd cmps cmpsb cmps cmpsw cmps cmpsd scas scasb scas scasw scas scasd lods lodsb lods lodsw lods lodsd stos stosb stos stosw stos stosd rep repe repz repne repnz ins insb ins insw ins insd outs outsb outs outsw outs outsd stc clc cmc cld std lahf sahf pushf pushfd popf popfd sti cli lds les lfs lgs lss lea nop ub2 xlat xlatb cpuid [ ]";
    var B = "DB DW DD DQ DT EQU = EVEN PAGE TITLE db dw dd dq dt equ even page title SEGMENT PROC ASSUME END ENDP  segment proc assume end endp";
    var C = "AX AH AL BX BH BL CX CH CL DX DH DL ax ah al bx bh bl cx ch cl dx dh dl SP BP SI DI sp dp si di IP FL ip fl CS DS SS ES cs ds ss es";;
    this.regexList = [{
        regex: SyntaxHighlighter.regexLib.doubleQuotedString,
        css: "string"
    }, {
        regex: SyntaxHighlighter.regexLib.singleQuotedString,
        css: "string"
    }, {
        regex: /^ *;.*/gm,
        css: "comments"
    }, {
        regex: new RegExp(this.getKeywords(C), "gm"),
        css: "color1 bold"
    }, {
        regex: new RegExp(this.getKeywords(B), "gm"),
        css: "functions bold"
    }, {
        regex: new RegExp(this.getKeywords(A), "gm"),
        css: "keyword bold"
    }];
};
SyntaxHighlighter.brushes.Nasm8086.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Nasm8086.aliases = ["nasm8086", "8086", "nasm", "asm", "masm"];
