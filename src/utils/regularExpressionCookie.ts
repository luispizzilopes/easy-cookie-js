export default function regularExpressionCookie(name: string): RegExp {
    return new RegExp('(^| )' + name + '=([^;]+)');
}
