function calculate(){
    if (isNaN(document.getElementById('length1').value) || isNaN(document.getElementById('length2').value) || isNaN(document.getElementById('length3').value)){
        document.getElementById("triangle-type").innerHTML = "NON-NUMBER INPUT";
        document.getElementById("perimeter").innerHTML = "NON-NUMBER INPUT";
        document.getElementById("area").innerHTML = "NON-NUMBER INPUT";
        document.getElementById("angle-1").innerHTML = "NaN";
        document.getElementById("angle-2").innerHTML = "NaN";
        document.getElementById("angle-3").innerHTML = "NaN";
        document.getElementById("triangle-type-2").innerHTML = "NON-NUMBER INPUT";
    } else {
        var length1 = Number(document.getElementById('length1').value);
        var length2 = Number(document.getElementById('length2').value);
        var length3 = Number(document.getElementById('length3').value);    
        if (checkValid(length1, length2, length3) == 1) {
            document.getElementById("triangle-type").innerHTML = triangleType(length1, length2, length3);
            var perimeter_var = perimeter(length1, length2, length3);
            document.getElementById("perimeter").innerHTML = perimeter_var;
            document.getElementById("area").innerHTML = area(length1, length2, length3, perimeter_var);
            var ang1 = angles(length1, length2, length3);
            var ang2 = angles(length2, length3, length1);
            var ang3 = angles(length3, length1, length2);
            document.getElementById("angle-1").innerHTML = ang1;
            document.getElementById("angle-2").innerHTML = ang2;
            document.getElementById("angle-3").innerHTML = ang3;
            document.getElementById("triangle-type-2").innerHTML = triangleTypeAng(ang1, ang2, ang3);
        } else {
            document.getElementById("triangle-type").innerHTML = "INVALID LENGTHS";
            document.getElementById("perimeter").innerHTML = "INVALID LENGTHS";
            document.getElementById("area").innerHTML = "INVALID LENGTHS";
            document.getElementById("angle-2").innerHTML = "N/A";
            document.getElementById("angle-3").innerHTML = "N/A";
            document.getElementById("triangle-type-2").innerHTML = "INVALID LENGTHS";
        }
    }
}

function checkValid(length1, length2, length3) {
    if ((length1+length2) >= length3 && (length2+length3) >= length1 && (length1+length3) >= length2){
        return 1;
    } else {
        return 0;
    }
}

function triangleType(length1, length2, length3) {
    if (length1==length2 && length2==length3){
        return "Equilateral";
    } if (length1 != length2 && length2 != length3 && length2 != length3) {
        return "Scalene";
    } else {
        return "Isosceles";
    }
}

function triangleTypeAng(ang1, ang2, ang3){
    if (ang1 == 90 || ang2 == 90 || ang3 == 90){
        return "Right-angled";
    }
    if (ang1 > 90 || ang2 > 90 || ang3 > 90){
        return "Obtuse";
    }
    if (ang1 == ang2 && ang2 == ang3){
        return "Equiangular";
    } else {
        return "Acute";
    }

}

function perimeter(length1, length2, length3) {
    return (length1 + length2 + length3).toFixed(1)
}

function area(length1, length2, length3, perimeter_var){
    let semi_perimeter = (perimeter_var)/2;
    let multiplied = (semi_perimeter * (semi_perimeter-length1) * (semi_perimeter - length2) * (semi_perimeter - length3));
    return Math.sqrt(multiplied).toFixed(1);
}

function angles(length1, length2, length3){
    ang = Math.acos((Math.pow(length1,2)+Math.pow(length2,2)-Math.pow(length3,2))/(2*length1*length2));
    return (radians_to_degrees(ang).toFixed(1));
}


function radians_to_degrees(radians){
  var pi = Math.PI;
  return radians * (180/pi);
}





