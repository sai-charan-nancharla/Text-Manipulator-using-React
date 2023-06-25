
declare
bsal number(10,2);

grsal=bsal+hra+ta+da

netsal=grsaL-(LIC+PF+IT)

BSAL<10000 HRA 2 TA 3 DA 4 LIC 1.5 PF 2.5 IT 3.5

>=10K <25K 4 5 6 2 3 4
>=25K <50K 6 7 8 4 5 6
>=50K      8 9 10 6 7 8

declare

empno number(3):=&empno;
empname varchar2(20):='&empname';
bsal number(5,2):=&bsal;
hra number(3);
ta number(3);
da number(3);
lic number(3);
pf number(3);
it number(3);
ded number(3);
gross_sal number(3);
net_sal number(3);

begin 

if(bsal<10000) then 

hra:=bsal*2/100;
ta:=bsal*3/100;
da:=bsal*4/100;
lic:=bsal*1.5/100;
pf:=bsal*2.5/100;
it:=bsal*3.5/100;

elsif(bsal>=10000 && bsal <25000) then

hra:=bsal*4/100;
ta:=bsal*5/100;
da:=bsal*6/100;
lic:=bsal*2/100;
pf:=bsal*3/100;
it:=bsal*4/100;

elsif(bsal>=25000 && bsal <50000) then

hra:=bsal*6/100;
ta:=bsal*7/100;
da:=bsal*8/100;
lic:=bsal*4/100;
pf:=bsal*5/100;
it:=bsal*6/100;

elsif(bsal>=50000) then

hra:=bsal*8/100;
ta:=bsal*9/100;
da:=bsal*10/100;
lic:=bsal*6/100;
pf:=bsal*7/100;
it:=bsal*8/100;

end if;

gross_sal:=bsal+hra+ta+da;
net_sal:=gross_sal-(lic+pf+it);

dbms_output.put_line(gross_sal);
dbms_output.put_line(net_sal);

end;
/


Q: Display 1st 3 employe names using cursor 

declare

cursor empcur1 is select empname from employe order by name;
name employe.name%type;
begin
open empcur1;
loop
fetch empcur1 into name;
exit when empcur1%notfound;
if empcur

