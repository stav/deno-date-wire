# deno-date-wire

## DateTime Wire Format

DateTime values appear as JSON strings in the form of "/Date(700000+0500)/", where the first number (700000 in the example provided) is the number of milliseconds in the GMT time zone, regular (non-daylight savings) time since midnight, January 1, 1970. The number may be negative to represent earlier times. The part that consists of "+0500" in the example is optional and indicates that the time is of the Local kind - that is, should be converted to the local time zone on deserialization. If it is absent, the time is deserialized as Utc. The actual number ("0500" in this example) and its sign (+ or -) are ignored.

When serializing DateTime, Local and Unspecified times are written with an offset, and Utc is written without.

The ASP.NET AJAX client JavaScript code automatically converts such strings into JavaScript DateTime instances. If there are other strings that have a similar form that are not of type DateTime in .NET, they are converted as well.

The conversion only takes place if the "/" characters are escaped (that is, the JSON looks like "\/Date(700000+0500)\/"), and for this reason WCF's JSON encoder (enabled by the WebHttpBinding) always escapes the "/" character.

https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/stand-alone-json-serialization?redirectedfrom=MSDN#datetime-wire-format

## Timezone

    '/Date\((\d+)([+-]\d+)?\)/'
    tz = isempty(tokens{2}) ? 'UTC' : 'local'

## Links

* ISO 8601 and RFC 822 on Android https://medium.com/@oguzbabaoglu/iso-8601-and-rfc-822-on-android-e45b6f9027b6
* RFC 3339 vs ISO 8601 vs HTML https://ijmacd.github.io/rfc3339-iso8601/
