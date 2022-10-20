export default function ellipsify(str, lengthMax)
{
    if (str.length > lengthMax) {
        return (str.substring(0, lengthMax) + "...");
    } else {
        return str;
    }
}
